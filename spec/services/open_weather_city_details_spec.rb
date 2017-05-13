require "rails_helper"
require "vcr"

describe OpenWeatherCityDetails do
  describe ".process", :vcr do
    it "successfully gets the weather information from Open Weather Map" do
      cities = ["Manila", "San Francisco"]

      details = OpenWeatherCityDetails.process(cities: cities)

      expect(details.count).to eq 2
      expect(details.first["cod"]).to eq 200
      expect(details.last["cod"]).to eq 200
    end
  end
end
