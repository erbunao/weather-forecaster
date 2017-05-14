require "open_weather"

class OpenWeatherCityDetails
  UNITS = "metric"

  def self.process(opts)
    new(opts).process
  end

  def initialize(opts)
    @city = opts[:city] || ''
  end

  def process
    OpenWeather::Current.city(city, options)
  end

  private

  attr_reader :city

  def options
    { units: UNITS }.merge(api_key)
  end

  def api_key
    { APPID: ENV["OPEN_WEATHER_MAP_API_KEY"] }
  end
end
