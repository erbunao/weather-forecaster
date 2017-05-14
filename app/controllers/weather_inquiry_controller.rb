class WeatherInquiryController < ApplicationController
  def index
    render json: OpenWeatherCityDetails.process(city: params[:city])
  end
end
