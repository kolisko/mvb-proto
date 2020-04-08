FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY ./dist/mvb-prototype-hybrid-webapp/ /usr/share/nginx/html/app/
COPY ./storybook-static/ /usr/share/nginx/html/storybook/
COPY ./nginx/ /etc/nginx/conf.d/
