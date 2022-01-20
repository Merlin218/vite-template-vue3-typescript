# Vite Template with Vue3 + Typescript

### 集成功能

- pnpm
- axios
- pinia
- vue-router
- eslint
- prettier
- husky
- commitlint
- ant design vue
- sass

### 开发指南

```bash

// 安装全部依赖
pnpm install

// 安装某个依赖
pnpm install xxx  -D/-S


// 运行
pnpm dev

// 打包
pnpm build

```

- 基于`unplugin-vue-components`实现组件自动导入，同时 vite 提供了原生的按需加载
  ```vue
  <template>
  	// 无需导入直接使用
  	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  	<a-button type="primary"> Primary </a-button>
  </template>
  ```

### 结构树

```bash
├── src
│   ├── App.vue  // 根组件
│   ├── api  // 请求api
│   │   ├── axios  // axios配置
│   │   │   ├── cancel.ts  // 取消请求配置
│   │   │   └── index.ts  // 实例配置
│   │   ├── index.ts  // 统一导出api模块
│   │   └── modules  // api模块
│   │       └── common.ts
│   ├── assets  // 静态资源
│   │   ├── logo.png
│   │   └── styles  // 样式资源
│   │       └── main.scss
│   ├── components  // 子组件
│   │   └── HelloWorld.vue
│   ├── configs  // 项目配置
│   │   └── index.ts
│   ├── env.d.ts
│   ├── main.ts // 入口文件
│   ├── pages  // 页面组件
│   ├── router  // 路由
│   │   └── index.ts
│   ├── store  // 状态管理
│   │   └── user.ts
│   ├── types  // 类型文件
│   │   └── common.d.ts
│   └── utils  // 工具类
└── vite.config.ts  // vite配置
```
