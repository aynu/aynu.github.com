// ----------------------------------------------------------------------------
// Copyright (C) Yukar Evolution Laboratory. All rights reserved.
// GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
// http://www.gnu.org/licenses/gpl-3.0-standalone.html
// ----------------------------------------------------------------------------
GreeterTest = TestCase("GreeterTest");
GreeterTest.prototype.testGreet = function() {
	var greeter = new myapp.Greeter();
	assertEquals("Hello World!", greeter.greet("World"));
};
