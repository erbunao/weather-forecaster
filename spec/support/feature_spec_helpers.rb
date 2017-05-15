module FeatureSpecHelpers
  include Capybara::DSL

  def fill_in_selectized(key, *values)
    values.flatten.each do |value|
      page.execute_script <<-JS
        var selectize = $('.#{key}')[0].selectize;
        selectize.addOption({text: '#{value}', value: '#{value}'});
        selectize.setValue('#{value}');
      JS
    end
  end
end
