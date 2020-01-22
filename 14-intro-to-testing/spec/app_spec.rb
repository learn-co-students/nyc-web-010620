require_relative './spec_helper'
require_relative '../app'

# a few ways to test stuff
# 1. Does it give me the output I expect?
# 2. Does it not give me any outputs I don't expect?
# 3. Does it error out at the appropriate times?

  # examples:
  # 1. "racecar" => true
  # 2. "tacocat" => true
  # 3. "mom" => true
  # 4. "a toyota's a toyota" => true
  # 5. "Racecar" => true
  # 6. "apples" => false
  # 7. 123 => throw error
  # 7. {} => throw error 

describe "palindrome?" do
  it "returns true if input is one word palindrome" do
    expect(palindrome?("racecar")).to eq(true)
    expect(palindrome?("tacocat")).to eq(true)
    expect(palindrome?("mom")).to eq(true)
  end

  it "returns false if input is not a palindrome" do
    expect(palindrome?("read")).to eq(false)
  end

  it "returns true if string is a multi-word palindrome" do 
    expect(palindrome?("a dog a panic in a pagoda")).to eq(true)
  end

  it "ignores punctuation" do
    expect(palindrome?("a toyota's a toyota")).to eq(true)
    expect(palindrome?("racecar?")).to eq(true)
    expect(palindrome?("a man, a plan, a canal, panama")).to eq(true)
    expect(palindrome?("mom!")).to eq(true)

    expect(palindrome?("apples?!")).to eq(false)
    expect(palindrome?("!!!")).to eq(true)
  end

  it "ignore capitalization" do
    expect(palindrome?("Mom")).to eq(true)
    expect(palindrome?("RaCEcAr")).to eq(true)

    expect(palindrome?("LaRRy")).to eq(false)
  end

  it("throws an error when argument is not a string") do
    expect { palindrome?(200) }.to raise_error(ArgumentError)
    expect { palindrome?([]) }.to raise_error(ArgumentError)
    expect { palindrome?({}) }.to raise_error(ArgumentError)
    expect { palindrome?(true) }.to raise_error(ArgumentError)
  end

end




