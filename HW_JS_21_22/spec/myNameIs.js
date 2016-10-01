describe("Data Is",function(){
	it('return object',function(){
		expect(objectIs()).toEqual('object');
	});
});

describe("String Is",function(){
	it('return string',function(){
		expect(stringIs()).toEqual('string');
	});
});

describe("localStorage And ParseObject Is",function(){
	it('return true',function(){
		expect(localAndParseIs()).toEqual(true);
	});
});