class WeatherInquiryController < ApplicationController
  def index
    details = OpenWeatherCityDetails.process(city: params[:city])
    if details['cod'] != '404'
      render json: { details: details }
    else
      render json: { error: details }, status: :unprocessable_entity
    end
  end
end
