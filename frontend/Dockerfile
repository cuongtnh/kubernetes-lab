FROM node:20
WORKDIR /app
COPY . .
RUN npm install && npm install react-scripts --save && npm run build
CMD ["npx", "serve", "-s", "build"]
EXPOSE 3000