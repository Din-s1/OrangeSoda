//Ruby Version Spec!

/* describe 'fizzbuzz' do
  it 'returns "fizz" for the number 3' do
    expect(fizzbuzz(3)).to eq 'fizz'
  end
  it 'returns "buzz" for the number 5' do
    expect(fizzbuzz(5)).to eq 'buzz'
  end
  it 'returns "fizzbuzz" for the number 15' do
    expect(fizzbuzz(15)).to eq 'fizzbuzz'
  end
  it 'returns the number if none of above satisfied' do
    expect(fizzbuzz(1)).to eq 1
end */

//Javascript Version


describe("fizzBuzz", function() {
  it("returns fizz for the number 3", function() {
    expect(fizzBuzz(3)).toBe('fizz');
  });
  it("returns buzz for the number 5", function() {
    expect(fizzBuzz(5)).toBe('buzz');
  });
  it("returns fizzbuzz for the number 15", function() {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it("returns the number if none of above satisfied", function() {
    expect(fizzBuzz(1)).toBe(1);
  });
});



