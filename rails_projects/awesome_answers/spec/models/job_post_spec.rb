require 'rails_helper'

#Below is a variable created to get a string of at least 100 characters
RANDOM_100_CHARS = "hello world hello world hello world hello world hello world hello world hello world hello hello worl hello world hello world"

RSpec.describe JobPost, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  # above is just the boilerplate as an example

  describe "validates" do
    describe "title" do
      it "requires a title to be present" do
        #GIVEN
        job_post = JobPost.new()

        #WHEN
        job_post.valid?

        #THEN
        #Ther following will pass the test if ythe errors.messages hash has a key named :title
        #This occurs when "title" validation fails
        expect(job_post.errors.messages).to(have_key(:title))
      end

      it "requires a unique title" do
        #GIVEN
        persisted_job_post = JobPost.create(
          title: "Full Stack Developer",
          description: RANDOM_100_CHARS,
          min_salary: 35_000,
          location: 'Vancouver'
        )

        job_post = JobPost.new(
          title: persisted_job_post.title,
          description: RANDOM_100_CHARS,
          min_salary: 35_000,
          location: 'Vancouver'
        )

        #WHEN
        job_post.valid?
  
        #THEN
        expect(job_post.errors.messages).to(have_key(:title))
      end


    end

    describe "description" do
      it "requires a description to be present" do

        #GIVEN
        job_post = JobPost.new

        #WHEN
        job_post.valid?

        #THEN
        expect(job_post.errors.messages).to(have_key(:description))
      end

      it "requires a description to be at least 100 characters" do
        #GIVEN
        job_post = JobPost.new(description: "abc", title: "This is a unique title")

        #WHEN
        job_post.valid?

        #THEN
        expect(job_post.errors.messages).to(have_key(:description))
      end
    end

    describe "min_salary" do
      it "requires min_salary to be numerical" do
        #GIVEN
        job_post = JobPost.new(min_salary: "hundred", description: RANDOM_100_CHARS, title: "My min salary")

        #WHEN
        job_post.valid?

        #THEN
        expect(job_post.errors.messages).to(have_key(:min_salary))
      end

      it "requires min_salary to be at least 30_000" do
        #GIVEN
        job_post = JobPost.new(min_salary: 25_000, description: RANDOM_100_CHARS, title: "My min salary greater than 30k")
        
        #WHEN
        job_post.valid?

        #THEN
        expect(job_post.errors.details[:min_salary][0][:error]).to(be(:greater_than_or_equal_to))
      end
    end

    describe "location" do
      it "requires a location to be present" do
        #GIVEN
        job_post = JobPost.new

        #WHEN
        job_post.valid?

        #THEN
        expect(job_post.errors.messages).to(have_key(:location))
      end
    end
  end

end



