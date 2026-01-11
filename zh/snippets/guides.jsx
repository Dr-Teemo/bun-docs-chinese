export const GuidesList = () => {
  const guidesData = {
    hero: {
      title: "指南",
      blurb: "使用 Bun 执行常见任务的代码示例和演练集合。",
    },
    featured: [
      {
        category: "Ecosystem",
        title: "将 Tanstack Start 与 Bun 结合使用",
        href: "zh/guides/ecosystem/tanstack-start",
        cta: "查看指南",
      },
      {
        category: "Ecosystem",
        title: "将 Next.js 与 Bun 结合使用",
        href: "zh/guides/ecosystem/nextjs",
        cta: "查看指南",
      },
      {
        category: "Ecosystem",
        title: "使用 Vite 和 Bun 构建前端",
        href: "zh/guides/ecosystem/vite",
        cta: "查看指南",
      },
      {
        category: "Runtime",
        title: "为 Bun 安装 TypeScript 声明",
        href: "zh/guides/runtime/typescript",
        cta: "查看指南",
      },
      {
        category: "HTTP",
        title: "编写简单的 HTTP 服务器",
        href: "zh/guides/http/simple",
        cta: "查看指南",
      },
      {
        category: "WebSocket",
        title: "构建简单的 WebSocket 服务器",
        href: "zh/guides/websocket/simple",
        cta: "查看指南",
      },
    ],
    categories: [
      {
        key: "deployment",
        title: "部署",
        icon: "rocket",
        items: [
          { title: "在 Vercel 上部署 Bun", href: "zh/guides/deployment/vercel" },
          { title: "在 Railway 上部署 Bun", href: "zh/guides/deployment/railway" },
          { title: "在 Render 上部署 Bun", href: "zh/guides/deployment/render" },
        ],
      },
      {
        key: "binary",
        title: "二进制数据",
        icon: "binary",
        items: [
          {
            title: "将 ArrayBuffer 转换为数字数组",
            href: "zh/guides/binary/arraybuffer-to-array",
          },
          { title: "将 ArrayBuffer 转换为 Blob", href: "zh/guides/binary/arraybuffer-to-blob" },
          {
            title: "将 ArrayBuffer 转换为 Buffer",
            href: "zh/guides/binary/arraybuffer-to-buffer",
          },
          {
            title: "将 ArrayBuffer 转换为字符串",
            href: "zh/guides/binary/arraybuffer-to-string",
          },
          {
            title: "将 ArrayBuffer 转换为 Uint8Array",
            href: "zh/guides/binary/arraybuffer-to-typedarray",
          },
          { title: "将 Blob 转换为 ArrayBuffer", href: "zh/guides/binary/blob-to-arraybuffer" },
          { title: "将 Blob 转换为 DataView", href: "zh/guides/binary/blob-to-dataview" },
          { title: "将 Blob 转换为 ReadableStream", href: "zh/guides/binary/blob-to-stream" },
          { title: "将 Blob 转换为字符串", href: "zh/guides/binary/blob-to-string" },
          { title: "将 Blob 转换为 Uint8Array", href: "zh/guides/binary/blob-to-typedarray" },
          {
            title: "将 Buffer 转换为 ArrayBuffer",
            href: "zh/guides/binary/buffer-to-arraybuffer",
          },
          { title: "将 Buffer 转换为 blob", href: "zh/guides/binary/buffer-to-blob" },
          {
            title: "将 Buffer 转换为 ReadableStream",
            href: "zh/guides/binary/buffer-to-readablestream",
          },
          { title: "将 Buffer 转换为字符串", href: "zh/guides/binary/buffer-to-string" },
          {
            title: "将 Buffer 转换为 Uint8Array",
            href: "zh/guides/binary/buffer-to-typedarray",
          },
          { title: "将 DataView 转换为字符串", href: "zh/guides/binary/dataview-to-string" },
          {
            title: "将 Uint8Array 转换为 ArrayBuffer",
            href: "zh/guides/binary/typedarray-to-arraybuffer",
          },
          { title: "将 Uint8Array 转换为 Blob", href: "zh/guides/binary/typedarray-to-blob" },
          {
            title: "将 Uint8Array 转换为 Buffer",
            href: "zh/guides/binary/typedarray-to-buffer",
          },
          {
            title: "将 Uint8Array 转换为 DataView",
            href: "zh/guides/binary/typedarray-to-dataview",
          },
          {
            title: "将 Uint8Array 转换为 ReadableStream",
            href: "zh/guides/binary/typedarray-to-readablestream",
          },
          {
            title: "将 Uint8Array 转换为字符串",
            href: "zh/guides/binary/typedarray-to-string",
          },
        ],
      },
      {
        key: "ecosystem",
        title: "生态系统",
        icon: "puzzle",
        items: [
          { title: "将 Gel 与 Bun 结合使用", href: "zh/guides/ecosystem/gel" },
          { title: "将 Prisma ORM 与 Bun 结合使用", href: "zh/guides/ecosystem/prisma" },
          { title: "将 Prisma Postgres 与 Bun 结合使用", href: "zh/guides/ecosystem/prisma-postgres" },
          { title: "创建 Discord 机器人", href: "zh/guides/ecosystem/discordjs" },
          { title: "为 Bun 应用添加 Sentry", href: "zh/guides/ecosystem/sentry" },
          { title: "将 Drizzle ORM 与 Bun 结合使用", href: "zh/guides/ecosystem/drizzle" },
          { title: "使用 Bun 构建 React 应用", href: "zh/guides/ecosystem/react" },
          { title: "使用 PM2 作为守护进程运行 Bun", href: "zh/guides/ecosystem/pm2" },
          { title: "使用 Nuxt 和 Bun 构建应用", href: "zh/guides/ecosystem/nuxt" },
          { title: "使用 Qwik 和 Bun 构建应用", href: "zh/guides/ecosystem/qwik" },
          { title: "使用 Astro 和 Bun 构建应用", href: "zh/guides/ecosystem/astro" },
          { title: "使用 Remix 和 Bun 构建应用", href: "zh/guides/ecosystem/remix" },
          { title: "使用 TanStack Start 和 Bun", href: "zh/guides/ecosystem/tanstack-start" },
          { title: "使用 systemd 作为守护进程运行 Bun", href: "zh/guides/ecosystem/systemd" },
          { title: "使用 Next.js 和 Bun 构建应用", href: "zh/guides/ecosystem/nextjs" },
          { title: "使用 SvelteKit 和 Bun 构建应用", href: "zh/guides/ecosystem/sveltekit" },
          { title: "使用 Vite 和 Bun 构建前端", href: "zh/guides/ecosystem/vite" },
          { title: "使用 SolidStart 和 Bun 构建应用", href: "zh/guides/ecosystem/solidstart" },
          {
            title: "使用 Drizzle ORM 使用 Neon Postgres",
            href: "zh/guides/ecosystem/neon-drizzle",
          },
          { title: "使用 Hono 和 Bun 构建 HTTP 服务器", href: "zh/guides/ecosystem/hono" },
          {
            title: "使用 Neon 的无服务器 Postgres 和 Bun",
            href: "zh/guides/ecosystem/neon-serverless-postgres",
          },
          { title: "使用 Elysia 和 Bun 构建 HTTP 服务器", href: "zh/guides/ecosystem/elysia" },
          { title: "使用 Docker 容器化 Bun 应用", href: "zh/guides/ecosystem/docker" },
          {
            title: "使用 Express 和 Bun 构建 HTTP 服务器",
            href: "zh/guides/ecosystem/express",
          },
          {
            title: "服务端渲染 (SSR) React 组件",
            href: "zh/guides/ecosystem/ssr-react",
          },
          { title: "使用 StricJS 和 Bun 构建 HTTP 服务器", href: "zh/guides/ecosystem/stric" },
          {
            title: "使用 Mongoose 和 Bun 读写 MongoDB 数据",
            href: "zh/guides/ecosystem/mongoose",
          },
        ],
      },
      {
        key: "htmlrewriter",
        title: "HTMLRewriter",
        icon: "file-code-2",
        items: [
          {
            title: "使用 HTMLRewriter 从网页提取链接",
            href: "zh/guides/html-rewriter/extract-links",
          },
          {
            title: "提取社交分享图片和开放图谱标签",
            href: "zh/guides/html-rewriter/extract-social-meta",
          },
        ],
      },
      {
        key: "http",
        title: "HTTP",
        icon: "globe",
        items: [
          { title: "常用 HTTP 服务器用法", href: "zh/guides/http/server" },
          { title: "热重载 HTTP 服务器", href: "zh/guides/http/hot" },
          { title: "编写简单的 HTTP 服务器", href: "zh/guides/http/simple" },
          { title: "启动 HTTP 服务器集群", href: "zh/guides/http/cluster" },
          { title: "在 HTTP 服务器上配置 TLS", href: "zh/guides/http/tls" },
          { title: "使用 fetch 发送 HTTP 请求", href: "zh/guides/http/fetch" },
          { title: "使用 fetch() 代理 HTTP 请求", href: "zh/guides/http/proxy" },
          { title: "将文件流式传输为 HTTP 响应", href: "zh/guides/http/stream-file" },
          { title: "使用 FormData 通过 HTTP 上传文件", href: "zh/guides/http/file-uploads" },
          { title: "在 Bun 中使用 Unix 域套接字进行 fetch", href: "zh/guides/http/fetch-unix" },
          {
            title: "使用异步迭代器的流式 HTTP 服务器",
            href: "zh/guides/http/stream-iterator",
          },
          {
            title: "使用 Node.js 流的流式 HTTP 服务器",
            href: "zh/guides/http/stream-node-streams-in-bun",
          },
        ],
      },
      {
        key: "install",
        title: "包管理器",
        icon: "package",
        items: [
          { title: "添加依赖项", href: "zh/guides/install/add" },
          { title: "添加 Git 依赖项", href: "zh/guides/install/add-git" },
          { title: "添加对等依赖项", href: "zh/guides/install/add-peer" },
          { title: "添加 tarball 依赖项", href: "zh/guides/install/add-tarball" },
          { title: "添加可信依赖项", href: "zh/guides/install/trusted" },
          { title: "添加可选依赖项", href: "zh/guides/install/add-optional" },
          { title: "添加开发依赖项", href: "zh/guides/install/add-dev" },
          {
            title: "在 Artifactory 中使用 bun install",
            href: "zh/guides/install/jfrog-artifactory",
          },
          { title: "生成 yarn 兼容的锁文件", href: "zh/guides/install/yarnlock" },
          {
            title: "从 npm install 迁移到 bun install",
            href: "zh/guides/install/from-npm-install-to-bun-install",
          },
          { title: "使用工作区配置单体仓库", href: "zh/guides/install/workspaces" },
          { title: "以不同名称安装包", href: "zh/guides/install/npm-alias" },
          {
            title: "配置 git 以对比 Bun 的 lockb 锁文件",
            href: "zh/guides/install/git-diff-bun-lockfile",
          },
          {
            title: "在 GitHub Actions 中使用 Bun 安装依赖",
            href: "zh/guides/install/cicd",
          },
          {
            title: "为 bun install 覆盖默认 npm 注册表",
            href: "zh/guides/install/custom-registry",
          },
          {
            title: "在 Azure Artifacts npm 注册表中使用 bun install",
            href: "zh/guides/install/azure-artifacts",
          },
          {
            title: "为组织作用域配置私有注册表与 bun install",
            href: "zh/guides/install/registry-scope",
          },
        ],
      },
      {
        key: "processes",
        title: "进程",
        icon: "cpu",
        items: [
          { title: "从 stdin 读取", href: "zh/guides/process/stdin" },
          { title: "监听 CTRL+C", href: "zh/guides/process/ctrl-c" },
          { title: "监听操作系统信号", href: "zh/guides/process/os-signals" },
          { title: "生成子进程", href: "zh/guides/process/spawn" },
          { title: "解析命令行参数", href: "zh/guides/process/argv" },
          { title: "从子进程读取 stderr", href: "zh/guides/process/spawn-stderr" },
          { title: "从子进程读取 stdout", href: "zh/guides/process/spawn-stdout" },
          { title: "以纳秒为单位获取进程正常运行时间", href: "zh/guides/process/nanoseconds" },
          { title: "生成子进程并通过 IPC 通信", href: "zh/guides/process/ipc" },
        ],
      },
      {
        key: "read-file",
        title: "读取文件",
        icon: "file",
        items: [
          { title: "读取 JSON 文件", href: "zh/guides/read-file/json" },
          { title: "检查文件是否存在", href: "zh/guides/read-file/exists" },
          { title: "将文件读取为 Buffer", href: "zh/guides/read-file/buffer" },
          { title: "将文件读取为字符串", href: "zh/guides/read-file/string" },
          { title: "获取文件的 MIME 类型", href: "zh/guides/read-file/mime" },
          { title: "将文件读取为 Uint8Array", href: "zh/guides/read-file/uint8array" },
          { title: "将文件读取为 ArrayBuffer", href: "zh/guides/read-file/arraybuffer" },
          { title: "监视目录更改", href: "zh/guides/read-file/watch" },
          { title: "将文件读取为 ReadableStream", href: "zh/guides/read-file/stream" },
        ],
      },
      {
        key: "runtime",
        title: "运行时",
        icon: "bot",
        items: [
          { title: "删除文件", href: "zh/guides/runtime/delete-file" },
          { title: "删除目录", href: "zh/guides/runtime/delete-directory" },
          { title: "导入 JSON 文件", href: "zh/guides/runtime/import-json" },
          { title: "导入 TOML 文件", href: "zh/guides/runtime/import-toml" },
          { title: "导入 YAML 文件", href: "zh/guides/runtime/import-yaml" },
          { title: "运行 Shell 命令", href: "zh/guides/runtime/shell" },
          { title: "重新映射导入路径", href: "zh/guides/runtime/tsconfig-paths" },
          { title: "在 Bun 中设置时区", href: "zh/guides/runtime/timezone" },
          { title: "设置环境变量", href: "zh/guides/runtime/set-env" },
          { title: "导入 HTML 文件为文本", href: "zh/guides/runtime/import-html" },
          { title: "读取环境变量", href: "zh/guides/runtime/read-env" },
          {
            title: "使用 --define 构建时常量",
            href: "zh/guides/runtime/build-time-constants",
          },
          { title: "使用 Web 调试器调试 Bun", href: "zh/guides/runtime/web-debugger" },
          { title: "在 GitHub Actions 中安装和运行 Bun", href: "zh/guides/runtime/cicd" },
          { title: "为 Bun 安装 TypeScript 声明", href: "zh/guides/runtime/typescript" },
          {
            title: "使用 VS Code 扩展调试 Bun",
            href: "zh/guides/runtime/vscode-debugger",
          },
          {
            title: "使用 V8 堆快照检查内存使用情况",
            href: "zh/guides/runtime/heap-snapshot",
          },
          {
            title: "定义和替换静态全局变量和常量",
            href: "zh/guides/runtime/define-constant",
          },
          {
            title: "在 macOS 上为单文件 JavaScript 可执行文件签名",
            href: "zh/guides/runtime/codesign-macos-executable",
          },
        ],
      },
      {
        key: "streams",
        title: "流",
        icon: "waves",
        items: [
          { title: "将 ReadableStream 转换为 JSON", href: "zh/guides/streams/to-json" },
          {
            title: "将 Node.js Readable 转换为 JSON",
            href: "zh/guides/streams/node-readable-to-json",
          },
          { title: "将 ReadableStream 转换为 Blob", href: "zh/guides/streams/to-blob" },
          {
            title: "将 Node.js Readable 转换为 Blob",
            href: "zh/guides/streams/node-readable-to-blob",
          },
          { title: "将 ReadableStream 转换为 Buffer", href: "zh/guides/streams/to-buffer" },
          { title: "将 ReadableStream 转换为字符串", href: "zh/guides/streams/to-string" },
          {
            title: "将 Node.js Readable 转换为字符串",
            href: "zh/guides/streams/node-readable-to-string",
          },
          {
            title: "将 ReadableStream 转换为 Uint8Array",
            href: "zh/guides/streams/to-typedarray",
          },
          {
            title: "将 ReadableStream 转换为 ArrayBuffer",
            href: "zh/guides/streams/to-arraybuffer",
          },
          {
            title: "将 Node.js Readable 转换为 Uint8Array",
            href: "zh/guides/streams/node-readable-to-uint8array",
          },
          {
            title: "将 Node.js Readable 转换为 ArrayBuffer",
            href: "zh/guides/streams/node-readable-to-arraybuffer",
          },
          {
            title: "将 ReadableStream 转换为块数组",
            href: "zh/guides/streams/to-array",
          },
        ],
      },
      {
        key: "test",
        title: "测试运行器",
        icon: "test-tube",
        items: [
          { title: "在 bun test 中模拟函数", href: "zh/guides/test/mock-functions" },
          { title: "在 bun test 中监视方法", href: "zh/guides/test/spy-on" },
          { title: "在 Bun 中使用 Testing Library", href: "zh/guides/test/testing-library" },
          { title: "在 bun test 中更新快照", href: "zh/guides/test/update-snapshots" },
          { title: "在 Bun 中以监视模式运行测试", href: "zh/guides/test/watch-mode" },
          { title: "在 bun test 中使用快照测试", href: "zh/guides/test/snapshot" },
          { title: "使用 Bun 测试运行器提前中止", href: "zh/guides/test/bail" },
          { title: "使用 Bun 测试运行器跳过测试", href: "zh/guides/test/skip-tests" },
          {
            title: "从 Jest 迁移到 Bun 的测试运行器",
            href: "zh/guides/test/migrate-from-jest",
          },
          { title: "使用 Bun 测试运行器运行测试", href: "zh/guides/test/run-tests" },
          { title: "在 Bun 的测试运行器中设置系统时间", href: "zh/guides/test/mock-clock" },
          {
            title: "使用 Bun 和 happy-dom 编写浏览器 DOM 测试",
            href: "zh/guides/test/happy-dom",
          },
          {
            title: "使用 Bun 测试运行器设置每个测试的超时时间",
            href: "zh/guides/test/timeout",
          },
          {
            title: '使用 Bun 测试运行器将测试标记为"待办"',
            href: "zh/guides/test/todo-tests",
          },
          {
            title: "使用 Bun 测试运行器多次重新运行测试",
            href: "zh/guides/test/rerun-each",
          },
          {
            title: "使用 Bun 测试运行器设置代码覆盖率阈值",
            href: "zh/guides/test/coverage-threshold",
          },
          {
            title: "使用 glob 模式选择性地并发运行测试",
            href: "zh/guides/test/concurrent-test-glob",
          },
          {
            title: "使用 Bun 测试运行器生成代码覆盖率报告",
            href: "zh/guides/test/coverage",
          },
          {
            title: "使用 bun test 导入、要求和测试 Svelte 组件",
            href: "zh/guides/test/svelte-test",
          },
        ],
      },
      {
        key: "utilities",
        title: "实用工具",
        icon: "wrench",
        items: [
          { title: "哈希密码", href: "zh/guides/util/hash-a-password" },
          { title: "生成 UUID", href: "zh/guides/util/javascript-uuid" },
          { title: "转义 HTML 字符串", href: "zh/guides/util/escape-html" },
          { title: "获取当前 Bun 版本", href: "zh/guides/util/version" },
          { title: "编码和解码 base64 字符串", href: "zh/guides/util/base64" },
          { title: "检查两个对象是否深度相等", href: "zh/guides/util/deep-equals" },
          { title: "检测代码是否使用 Bun 执行", href: "zh/guides/util/detect-bun" },
          { title: "获取当前文件的目录", href: "zh/guides/util/import-meta-dir" },
          { title: "获取当前文件的文件名", href: "zh/guides/util/import-meta-file" },
          {
            title: "将文件 URL 转换为绝对路径",
            href: "zh/guides/util/file-url-to-path",
          },
          { title: "使用 gzip 压缩和解压缩数据", href: "zh/guides/util/gzip" },
          {
            title: "将绝对路径转换为文件 URL",
            href: "zh/guides/util/path-to-file-url",
          },
          {
            title: "获取可执行 bin 文件的路径",
            href: "zh/guides/util/which-path-to-executable-bin",
          },
          { title: "休眠固定毫秒数", href: "zh/guides/util/sleep" },
          { title: "使用 DEFLATE 压缩和解压缩数据", href: "zh/guides/util/deflate" },
          {
            title: "获取当前文件的绝对路径",
            href: "zh/guides/util/import-meta-path",
          },
          { title: "检查当前文件是否为主要入口点", href: "zh/guides/util/entrypoint" },
          { title: "获取当前入口点的绝对路径", href: "zh/guides/util/main" },
        ],
      },
      {
        key: "websocket",
        title: "WebSocket",
        icon: "radio",
        items: [
          { title: "构建简单的 WebSocket 服务器", href: "zh/guides/websocket/simple" },
          {
            title: "为 WebSocket 消息启用压缩",
            href: "zh/guides/websocket/compression",
          },
          { title: "构建发布-订阅 WebSocket 服务器", href: "zh/guides/websocket/pubsub" },
          {
            title: "在 WebSocket 上设置每个套接字的上下文数据",
            href: "zh/guides/websocket/context",
          },
        ],
      },
      {
        key: "write-file",
        title: "写入文件",
        icon: "file-pen",
        items: [
          { title: "删除文件", href: "zh/guides/write-file/unlink" },
          { title: "写入到 stdout", href: "zh/guides/write-file/stdout" },
          { title: "将 Blob 写入文件", href: "zh/guides/write-file/blob" },
          { title: "将文件写入到 stdout", href: "zh/guides/write-file/cat" },
          { title: "追加内容到文件", href: "zh/guides/write-file/append" },
          { title: "将字符串写入文件", href: "zh/guides/write-file/basic" },
          { title: "增量写入文件", href: "zh/guides/write-file/filesink" },
          { title: "将响应写入文件", href: "zh/guides/write-file/response" },
          { title: "将文件复制到另一位置", href: "zh/guides/write-file/file-cp" },
          { title: "将 ReadableStream 写入文件", href: "zh/guides/write-file/stream" },
        ],
      },
    ],
  };

  return (
    <div id="guides-list">
      {/* Featured cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">特色</h2>
        <Columns cols={3}>
          {guidesData.featured.map(g => (
            <Card key={g.href} title={g.title} href={g.href} cta={g.cta} />
          ))}
        </Columns>
      </div>
      {/* All guides organized by category */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">全部指南</h2>
        {guidesData.categories.map(category => (
          <div key={category.key} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">{category.title}</h3>
            <Columns cols={3}>
              {category.items.map(guide => (
                <Card key={guide.href} title={guide.title} description=" " href={guide.href} cta="" />
              ))}
            </Columns>
          </div>
        ))}
      </div>
    </div>
  );
};