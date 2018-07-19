rm -rf _site
git clone -b master https://github.com/neegium/neegium.github.io _site
bundle exec jekyll build
cd _site
touch CNAME
git add .
git commit
git push
