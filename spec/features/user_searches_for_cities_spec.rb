require "rails_helper"

feature "User searches for cities", :vcr do
  scenario "empty search", :js do
    visit root_path

    expect(page).to have_content("No cities yet")
  end

  scenario "single city", :js do
    visit root_path
    fill_in_selectized "js-selectize", "Lisbon"

    within(".card") do
      expect(page).to have_content("Lisbon")
    end
  end

  scenario "multiple cities", :js do
    visit root_path
    fill_in_selectized "js-selectize", ["Lisbon", "Paris", "Los Angeles"]

    within(".section") do
      expect(page).to have_content("Lisbon")
      expect(page).to have_content("Paris")
      expect(page).to have_content("Los Angeles")
    end
  end

  scenario "removes searched city", :js do
    visit root_path
    fill_in_selectized "js-selectize", "Lisbon"
    sleep 0.5 # ajax request
    find(".remove").click

    expect(page).to have_css('div.section.section--empty')
  end
end

