# Adapted from https://github.com/willkoehler/my_blog/blob/master/Rakefile
# usage rake site:publish
require "rubygems"
require "tmpdir"
require "bundler/setup"
require "jekyll"
require 'shellwords'

namespace :site do
  desc "Generate build"
  task :generate do
    if system "git show-ref --verify --quiet refs/heads/master"
      system "git checkout master"
    end
    abort if $?.exitstatus != 0      # abort if checkout failed
    system "rm -r .asset-cache"
    system "JEKYLL_ENV=production jekyll build"
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
      system "mv _site/* #{tmp}"
      if system "git show-ref --verify --quiet refs/heads/master"
        system "git checkout master"
      else
        system "git checkout --orphan master"   # create new branch with no history
      end
      abort if $?.exitstatus != 0      # abort if checkout failed
      system "git pull origin master"
      system "rm -rf *"
      system "mv #{tmp}/* ."
      message = "Site updated at #{Time.now.utc}"
      system "git add --all ."
      system "git commit -am #{message.shellescape}"
      system "git push origin master"
      system "git checkout develope"
      puts "Site published successfully."
    end
  end
end
