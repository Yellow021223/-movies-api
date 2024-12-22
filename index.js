import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRouter from './api/users/index.js';
import './db/index.js';
import defaultErrHandler from './caller/errHandler';
import moviesRouter from './api/movies/index.js';
import authenticate from './authenticate/index.js'; // 导入认证中间件

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use(defaultErrHandler);

// 将认证中间件和 moviesRouter 合并，只使用一次 '/api/movies'
app.use('/api/movies', authenticate, moviesRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
