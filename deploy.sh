#!/bin/bash

set -e

# Загружаем переменные окружения
if [ -f ".env" ]; then
  set -a
  source .env
  set +a
  echo "✅ Переменные из .env загружены"
else
  echo "❌ Файл .env не найден"
  exit 1
fi

# Проверяем обязательные переменные
required_vars=(
  "AWS_ACCESS_KEY_ID"
  "AWS_SECRET_ACCESS_KEY"
  "BUCKET_NAME"
  "YC_FUNCTION_ID"
  "TELEGRAM_BOT_TOKEN"
  "TELEGRAM_CHAT_ID"
)

for var in "${required_vars[@]}"; do
  if [ -z "${!var}" ]; then
    echo "❌ Переменная $var не установлена"
    exit 1
  fi
done

ENDPOINT_URL="https://storage.yandexcloud.net"
YC_PROFILE="aderevyankin-ru"

echo ""
echo "Что деплоим?"
echo "1) Только фронтенд"
echo "2) Только функцию"
echo "3) Всё"
read -p "Выбор [3]: " choice
choice=${choice:-3}

# Деплой функции
deploy_function() {
  echo ""
  echo "📦 Упаковка функции..."
  cd functions/contact-form
  zip -r ../../function.zip . -x "*.DS_Store"
  cd ../..

  echo "🚀 Деплой функции..."
  yc --profile="$YC_PROFILE" serverless function version create \
    --function-id="$YC_FUNCTION_ID" \
    --runtime=nodejs18 \
    --entrypoint=index.handler \
    --memory=128m \
    --execution-timeout=10s \
    --source-path=function.zip \
    --environment="TELEGRAM_BOT_TOKEN=$TELEGRAM_BOT_TOKEN,TELEGRAM_CHAT_ID=$TELEGRAM_CHAT_ID"

  rm function.zip
  echo "✅ Функция задеплоена"
}

# Деплой фронтенда
deploy_frontend() {
  echo ""
  echo "🔨 Сборка Next.js..."
  npm run build

  echo ""
  echo "📤 Загрузка в S3..."
  aws --endpoint-url="$ENDPOINT_URL" s3 sync out "s3://$BUCKET_NAME" --delete

  echo "✅ Фронтенд загружен в s3://$BUCKET_NAME"
}

case $choice in
  1)
    deploy_frontend
    ;;
  2)
    deploy_function
    ;;
  3)
    deploy_function
    deploy_frontend
    ;;
  *)
    echo "❌ Неверный выбор"
    exit 1
    ;;
esac

echo ""
echo "✅ Готово!"