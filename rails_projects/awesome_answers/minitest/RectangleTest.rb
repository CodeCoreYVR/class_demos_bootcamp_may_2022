require "minitest/autorun"
require "./Rectangle.rb"

class RectangleTest < MiniTest::Test
    def test_area
        #GIVEN
        rectangle = Rectangle.new(2,10)

        #WHEN
        area = rectangle.area

        #THEN
        assert_equal(20, area)
    end
end



