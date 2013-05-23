;(function (jQuery) {
	var
		Placeholder,
		$ = jQuery,
		handler = (typeof $().on === 'function') ? 'on' : 'bind';

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
			this.checkPlaceholderAttr();
			this.bindEvent();
			this.checkStringToJudgeMode(Placeholder.FLG.BLUR);
		},
		checkPlaceholderAttr: function () {
			var
				stringHold = this.$input.attr('placeholder');

			if (!stringHold) {
				return;
			}

			this.options.stringHold = stringHold;
		},
		bindEvent: function () {
			this.$input[handler]('focus', $.proxy(function () {
				this.checkStringToJudgeMode(Placeholder.FLG.FOCUS);
			}, this));
			this.$input[handler]('blur', $.proxy(function () {
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
