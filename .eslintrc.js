module.exports = {
	//root: true 用于指定它是最顶层的配置，即它在任何情况下都会被采用，而不会被继承覆盖
	root: true,
	//env 指定代码运行的环境
	env : {
		browser: true,
		node   : true,
		es2021 : true,
		es6    : true
	},
	//extends 指定继承的配置
	extends      : ["plugin:vue/essential"],
	//plugins 指定使用的插件
	plugins      : ["@typescript-eslint"],
	// parserOptions 指定解析器选项
	parserOptions: { parser: "babel-eslint" },
	plugins      : ["vue"],
	// rules 指定自定义的规则
	rules        : {
		eqeqeq                       : "off",
		curly                        : "error",
		quotes                       : ["error", "double"],
		"arrow-parens"               : 0,
		"generator-star-spacing"     : 0,
		"no-unused-vars"             : "warn",
		"no-debugger"                : process.env.NODE_ENV === "production" ? "error" : "off",
		indent                       : [2, 4, { SwitchCase: 1 }],
		"space-before-function-paren": ["error", "never"],
		"no-constant-condition"      : ["warn"],
		"no-empty"                   : ["off"],
		"comma-spacing"              : ["error", { after: true }],
		"key-spacing"                : [
			"error",
			{
				singleLine: {},
				multiLine : { align: "colon" }
			}
		],
		"object-curly-newline" : ["error", { multiline: true }],
		"array-bracket-newline": ["error", { multiline: true }],
		curly                  : ["error", "all"],
		quotes                 : ["error", "double"],
		indent                 : ["error", "tab"],
		"brace-style"          : ["error", "stroustrup", { allowSingleLine: false }],
		"space-infix-ops"      : ["error"],
		"comma-dangle"         : ["warn", "never"]
	},
	//overrides 指定某些文件的指定规则 */
	overrides: [
		{
			files: ["*.vue"],
			rules: { "vue/multi-word-component-names": 0 }
		}
	]
};

/*
eqeqeq:关闭此规则，允许使用==和!=进行比较。
curly:要求使用大括号将代码块括起来。
quotes:要求使用双引号。
arrow-parens:允许省略箭头函数参数的括号。
generator-star-spacing:允许在生成器函数中省略星号和其周围的空格no-unused-vars:警告末使用的变量。
no-debugger:如果当前环境是production，则报错，否则关闭此规则。indent:要求缩进为2或4个空格，switch语句的case子句需要缩进一次.space-before-function-paren:要求在函数定义中不要使用空格。
o-constant-condition:警告不要使用永远为真或永远为假的条件。no-empty:关闭此规则，允许空块。
comma-spacing:要求在逗号后面使用空格。
key-spacing:要求在对象字面量中使用空格，并且在多行对象字面量中对齐冒号。object-curly-newline:要求在多行对象字面量中使用换行符。
array-bracket-newline:要求在多行数组字面量中使用换行符。curly:要求在所有情况下使用大括号。
quotes:要求使用双引号。
indent:要求使用制表符进行缩进。
brace-style:要求使用Stroustrup 风格的大括号，不允许单行大括号。space-infix-ops:要求在中缀操作符两侧使用空格。
comma-dangle:警告不要在未尾使用逗号。
*/
