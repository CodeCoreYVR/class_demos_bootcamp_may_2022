require "minitest/autorun"

class AwesomeTest < MiniTest::Test
    def test_something
        #something to test
        assert_equal(3, 1 + 1)
    end

    def test_something_else
        assert_equal(3, 1 + 2)
    end
end

#to run this file, execute ruby

#cd into minitest then run: ruby AwesomeTest.rb
