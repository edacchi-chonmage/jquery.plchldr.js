;(function (jQuery) {
	var
		Placeholder,
		$ = jQuery;

	Placeholder = function ($input, options) {
		this.$input = $input;
		this.options = options;
		this.flgHold = false;

		this.init();
	};
	Placeholder.FLG = {
		FOCUS: true,
		BLUR: false
	};
	Placeholder.prototype = {
		init: function () {
			this.bindEvent();
			this.checkStringToJudgeMode(Placeholder.FLG.BLUR);
		},
		bindEvent: function () {
			this.$input.on('focus', $.proxy(function () {
				this.checkStringToJudgeMode(Placeholder.FLG.FOCUS);
			}, this));
			this.$input.on('blur', $.proxy(function () {
				this.checkStringToJudgeMode(Placeholder.FLG.BLUR);
			}, this));
		},
		checkStringToJudgeMode: function (typeEvent) {
			var
				stringInputed = this.$input.val();

			if (typeEvent === Placeholder.FLG.BLUR && !stringInputed) {
				this.holdOn();
			} else if (typeEvent === Placeholder.FLG.FOCUS && this.flgHold) {
				this.holdOff();
			}
		},
		holdOn: function () {
			this.flgHold = true;
			this.$input.val(this.options.stringHold);
			this.$input.css('color', this.options.foregroundHold);
		},
		holdOff: function () {
			this.flgHold = false;
			this.$input.val('');
			this.$input.css('color', '');
		}
	};

	$.fn.placeholder = function (settings) {
		$.fn.placeholder.defaults = {
			stringHold: 'Default string.',
			foregroundHold: '#999999'
		};

		var options = $.extend({}, $.fn.placeholder.defaults, settings);

		return this.each(function () {
			var placeholder = new Placeholder($(this), options);
		});
	};
})(jQuery);
