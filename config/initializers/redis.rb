

url = ENV["REDISTOGO_URL"] || "http://localhost:6379"
uri =  URI.parse(url) 
$redis=  Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)

