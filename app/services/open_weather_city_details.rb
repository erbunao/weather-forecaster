class OpenWeatherCityDetails
  def process(opts)
    new(opts).process
  end

  def initialize(opts)
    @cities = opts[:cities] || []
  end

  def process
    cities.map { |city| OpenWeather::Current.city(city, options) }
  end

  private

  attr_reader :cities

  def options
    { units: "metrics" }.merge(api_key)
  end

  def api_key
    { APPID: ENV["OPEN_WEATHER_MAP_API_KEY"] }
  end
end
