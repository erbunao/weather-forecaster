require "rails_helper"
require "vcr"

describe OpenWeatherCityDetails do
  describe ".process", :vcr do
    it "successfully gets the weather information from Open Weather Map" do
      city = "San Francisco"

      details = OpenWeatherCityDetails.process(city: city)

      expect(details["cod"]).to eq 200
    end
  end
end
