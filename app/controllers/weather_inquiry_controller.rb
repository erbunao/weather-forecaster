class WeatherInquiryController < ApplicationController
  def index
    render json: OpenWeatherCityDetails.process(cities: params[:cities])
  end
end
