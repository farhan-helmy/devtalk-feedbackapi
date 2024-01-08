FROM public.ecr.aws/lambda/nodejs:latest

WORKDIR ${LAMBDA_TASK_ROOT}

COPY package*.json ./

RUN npm install

COPY . .


CMD [ "src/index.handler" ]