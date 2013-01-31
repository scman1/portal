#!/usr/bin/env ruby

# You might want to change this
ENV["RAILS_ENV"] ||= "development"

root = File.expand_path(File.dirname(__FILE__))
root = File.dirname(root) until File.exists?(File.join(root, 'config'))
require File.join(root, "config", "environment")

Rails.logger.info "The run updater started running at #{Time.now}.\n"

$running = true
Signal.trap("TERM") do 
  $running = false
  Rails.logger.info "The run updater daemon stopped running at #{Time.now}.\n"
end

while($running) do
  
  # Replace this with your code
  #Rails.logger.auto_flushing = true
  
  begin
    Tavernaserv.run_update
  rescue
     @error_message="#{$!}"
     Rails.logger.info "Update Error "
     Rails.logger.info @error_message
  ensure
    sleep 10
  end
  
end