# 二次开发

## 构建
```
nvm use 14
yarn install
yarn run start
yarn run build
```

## 部署
```
mv build /opt/rclone/cache/webgui/current
```

## nginx配置，研发时跨域
vi /etc/cyber/nginx/conf.d/rclone.conf
```
server {
    listen   3000;
    server_name localhost 127.0.0.1 cyber.host;

    location / {
        # 解决跨域问题
        if ($request_method = 'OPTIONS') {
        		 add_header Access-Control-Allow-Origin *;
        		 add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,PATCH,OPTIONS;
             add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
             add_header Access-Control-Expose-Headers 'Content-Length,Content-Range';
        		 return 204;
        }

        add_header Access-Control-Allow-Credentials true;
        #add_header Access-Control-Allow-Origin $http_origin;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        add_header Access-Control-Expose-Headers 'Content-Length,Content-Range';

        proxy_pass http://127.0.0.1:3000;
        #proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Origin '';
        proxy_connect_timeout 60s;
        proxy_read_timeout 30s;
    }

    location /rc {
        # 解决跨域问题
        if ($request_method = 'OPTIONS') {
        		 add_header Access-Control-Allow-Origin *;
        		 add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,PATCH,OPTIONS;
             add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
             add_header Access-Control-Expose-Headers 'Content-Length,Content-Range';
        		 return 204;
        }

        add_header Access-Control-Allow-Credentials true;
        #add_header Access-Control-Allow-Origin $http_origin;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        add_header Access-Control-Expose-Headers 'Content-Length,Content-Range';

        proxy_pass http://127.0.0.1:5572;
        #proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Origin '';
        proxy_connect_timeout 60s;
        proxy_read_timeout 30s;
    }

    location /core {
        # 解决跨域问题
        if ($request_method = 'OPTIONS') {
        		 add_header Access-Control-Allow-Origin *;
        		 add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,PATCH,OPTIONS;
             add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
             add_header Access-Control-Expose-Headers 'Content-Length,Content-Range';
        		 return 204;
        }

        add_header Access-Control-Allow-Credentials true;
        #add_header Access-Control-Allow-Origin $http_origin;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        add_header Access-Control-Expose-Headers 'Content-Length,Content-Range';

        proxy_pass http://127.0.0.1:5572;
        #proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Origin '';
        proxy_connect_timeout 60s;
        proxy_read_timeout 30s;
    }    
}
```