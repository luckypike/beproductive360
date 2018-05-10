# config valid for current version and patch releases of Capistrano
lock "~> 3.10"

set :application, "beproductive360"
set :repo_url, "git@github.com:luckypike/beproductive360.git"

set :deploy_to, "/home/deploy/apps/beproductive360.ru"

set :ssh_options, { forward_agent: true }

append :linked_files, "config/database.yml", "config/master.key"
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", "storage"

set :keep_releases, 5
