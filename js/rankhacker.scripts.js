//////////////////////////////////////////////////////  //
//    EVENTS ON PAGE LOADED                             //
//////////////////////////////////////////////////////  //

	$(window).load(function () { // makes sure the whole site is loaded
		"use strict";


		//$('#loading').fadeOut(); // will first fade out the loading animation
		//$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
		//$("body").removeClass("page-loading");
		return false;

	});




//////////////////////////////////////////////////////  //
//    GLITCH                                            //
//////////////////////////////////////////////////////  //


$(document).ready(function() {

	var data = ["/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzIzMDVBNEY4MzgxMUU0QkUwQTk0NDUwNThDQTE5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzIzMDVBNUY4MzgxMUU0QkUwQTk0NDUwNThDQTE5OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MjMwNUEyRjgzODExRTRCRTBBOTQ0NTA1OENBMTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MjMwNUEzRjgzODExRTRCRTBBOTQ0NTA1OENBMTk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAFBAQGRIZJxcXJzImHyYyLiYmJiYuPjU1NTU1PkRBQUFBQUFERERERERERERERERERERERERERERERERERERERAEVGRkgHCAmGBgmNiYgJjZENisrNkREREI1QkRERERERERERERERERERERERERERERERERERERERERERERERERE/8AAEQgA+QHgAwEiAAIRAQMRAf/EAGkAAQEBAQEAAAAAAAAAAAAAAAABAgMGAQEBAQEAAAAAAAAAAAAAAAAAAQIDEAEAAgEEAwADAQADAQAAAAAAAREh8FFhEoGRAjFxoeFBIhPxEQEBAQEBAQEAAAAAAAAAAAAAESGBAWFR/9oADAMBAAIRAxEAPwDyOTJRTTmZKkpaBMlSUUKVJUlFAVJUlFAVJUnUoCpKkooDJkooDJUlFAZMnVKBclSnU6guTKdVoATqvUDIlLQAUUAFFCAUUALSUALRQIZWigQWigQWihagtFCILRQVKKWjqFQpaKFqUUtFCVKKWkoUopaSgAo6gWXIIFyWAFlyAFlyAFyXIAWWAFlmDAFlmDACWuCoAtLWoKgEUqCoACoKgAKgqAAqEqAUyVBUAZ3MlQVABZUGAMlmDAAYAMgAZLDABYAAAAAAAAYBFMAIpgwCCmAQXBgKC187rXzuCI1UblRuCYMGDC6GDBgwmoVBgwuDRKgwYXAIUv8A1MAlC/8AU/68qJr8i188+kqN59ABUbz6K+efQpQtfPPor559AgtfPPor559BiI1Xzz6K+efQYgtfPPor559BiC188+ivnn1/oYiNdfnn0dfnn0GMjVfPPor559BjI11+efR1+efQXxka6/PPo6/PPoKyNdY59HX559BWRqvnn0VHPoSsjVRz6Kjn0FZwXDVRz6KjlBnBhrHJgVLguFweAS4ML4MbCJgwuNjGwJgwuNjGwJjgwuNi42BMcGOFxsY2n2onktkRWr5L5ZAastkUatLQBbLQBbLQBbLQBbLQBbLQBbLQCLZaZAW0sMgqGTIBZkyBZZkyAtpkBRMgKYQBTCAKYQBoZEGsDIDQyA0MijSIUgohSiiUAolFAolFAolFAtSVK+EAqSpPABUlB4AqSgAooooCipKKAqSpKKAqTJRQFSUUUBQUtAytLUlSCULUlSIyZayZCs5MtVJUi1nJlrJUhWcmWslSFZuRozuFZsayZCsjWTIVkayZCsjWTIVkprJkKiU0XIJQuQEpFAEUAKKUEKKKAopaSgKKKWgQKEUCihAKKkAKKkAKKAFpKQBaSlAor9gAHsABACilUCigAoowS1sopL4AUUUApSiALQApKAYJKAYCgBSgFCAAoBRQAUUIBRQFBRQFFFFAUUFAUUUUC42SoWv2dY5QTBUbLjkqOQiVGxUbLUcpgIY2MFCrDBgoCGDCBBcLhkoiNXBcJUFQQW4LhKhagC4LgqDrAJZa9YOoJZa9TqBZcHU6hSyzqdRMLLOp1DCyzqdSBZZ1OouFovU6hSUWoKgEUqCoAssqCoEAqNio2QLDGxjYqwCoKjYpA8GI/wCExsEAxsYFgGEwpGrLZwYILa2zgwRFsswYIJRS4KRUoWihEFopRBaKBBa1R11QIL11R14/gIL14/hXH8BBeuqOvAIL14/h14/gIL14K4/gIL1K4BBanYoVBaKBClooEopaKBKKWigSiloBKKUBKgqFBEqCoUBKgqFASoMLZYJgwtqDODDQDNwXDQDNwXDR5BnBcNAM3BcL5AS4LhSgTAoALf69f4X+vX+KILf69f4XPHr/AAEFv9ev8L/Xr/AQXt+vRf69Agt/r0X+vSCehb/Xov8AQIF/r0X+gAss0Ass0DwtoB4ADAFBBTWshUsXWsmtZCoLrWTWshULa1rKa1kSoa/C61lc868hWdfguN/4t869rc868hWLLaud9ey5317VU1+C2rnfXsud515SnGSZhrtO868l/W868lOMlxu1c7zryXO868lGbLav63kv63kGbLa7fW8l/XIMlr2neVv65Bmy2r+uS/rkGbLa7TynaeQSy1uZLkEste0naQ4llrcp2NFvktKKggtmEqCoILZccpUGCC4McpUFQguOS45SioUW/wBmEooDBgooUwFFBSoMFFBSoKgopQwFFCUCikAK1RWqACtUVqgArVFaoAWtUVqgArVFaoEF1+DX4BBdfg1+AQK1S1qgEuDX4NfgC4Lg1+DX4AuC4DX4AuC4Nfg1+ALguDX4ALguApCFwXAAXBcAoXBcABcFwUAWWdjtwQLS17cHbggWWduC+CBZZfBfBAC+CyAF8F8EAL4L4IABAAIABAAIABAAIYAlEXFMiERcmUUgZMmTJAyZMmSBkyZMkUyZRcrEMmTOoMpADJkALkuQDJkuQMhkuQAyXOoADJkAXKVOoIAuUqSALkqSC9/rj0dvrUM+TyJGu31qDt9ahnO5ncWNdvrUHb61DOTIRrt9ag7fWoZAjXb61B2+tQgJF7fWoO31qEPAL2+tQdvrUJ4PAL2+tQd/rUJ4PBFvq9vrUJf0eDwQvqX9Lf0eDwaaX9Ez9Hg8GnDv9Hf6PB4XTPw/9Po/9J3K4PATz8Xt9Hb7TwVwiT4vb7O30ngiL/4IT4vb7O32lV/wVwQi9vrk7fXKVwlEI12++Tt97ynWUoI12+95O33ynVOoTxrt97ydvveWepQRrt97ydvveWepQRrt97yX97yzRQRrt97yX9byzRQsav63kv73liilI3f1vPsv63n2xSoRq/refaX9bz7QEi39bz7L+t59oBFv63n2t/e8+09F/ogdvv8AFz7L+t59no9EEzut/W/9L/Rf6It9SyzyeQLCuUoVbEqF8qAXyXyiAXyXyAF8nkAPJfKgHk8oAFlACygHkwUACgAUAPJQAAAAC4AAMABgwAGDAHgMGCgGDBVCzCYKRSyoKgoWGECNUlJhcCQopMLUAqUVBQFBRQAUAUUtfor9JV6lQtRuCnSo3KjcA6VBUCB1ajkxzrygHVxzryY5SigXHKY5WuYK5gMTHJjlajeEmBFxvJjeSo3gqNxcSZ/Zf7Wo3KjcL4l/stajcqNwqWW1jdKjcSpZbWN4JreArPsaxvBcbwIiNY3gxvAILcbwnmPQoYMb/wAPMegA8/w8/wAADG5jdFQXG55BMGFxuuNwZwYXG5jcpEwYXyY3WomDC+QImFwARMLjX/wQWGDB+xSGDGwuEEwY2XBgTExsY2XBgXEAVAMIC2GCgDIAAABRgAKKACioACikAKKACilBFooEUKAAoAAAAAtFAAALACywALACywAAAS1AAAAAAAAAAAAwAtlsCYjfY7apgUxuztqmAMb7ao7fr0wBjfb9ejtqmAMb7aovVMAY3eqO06hgDG+06hL1TIGNXqi51DIGNXOoLlkDGrLlkFxrJlkMGsmWAwbyXLAmDdyZYDBu5W5cwwdLktzFxMb/ACMArpZbmA6WW5iYu/XXtO6duXMM+I6duTtO7mGfEx07zudp3cxcMdO87neXMMMdO87nad3NQxvvO53ndgDG+87nad2FDGu07nad2FDGu07p2ndAMXtO52ndAMf/2Q==", "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzIzMDVBOEY4MzgxMUU0QkUwQTk0NDUwNThDQTE5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RTJDNDM4NkY4MzkxMUU0QkUwQTk0NDUwNThDQTE5OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MjMwNUE2RjgzODExRTRCRTBBOTQ0NTA1OENBMTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MjMwNUE3RjgzODExRTRCRTBBOTQ0NTA1OENBMTk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAFBAQGRIZJxcXJzImHyYyLiYmJiYuPjU1NTU1PkRBQUFBQUFERERERERERERERERERERERERERERERERERERERAEVGRkgHCAmGBgmNiYgJjZENisrNkREREI1QkRERERERERERERERERERERERERERERERERERERERERERERERERE/8AAEQgA+QHgAwEiAAIRAQMRAf/EAGQAAQEBAQEAAAAAAAAAAAAAAAABAgMGAQEBAQAAAAAAAAAAAAAAAAAAAQIQAQEAAgICAgMBAQEAAAAAAAARASFRYZES8IFxAiKhMUERAQEBAAMAAAAAAAAAAAAAAAARIQFhgf/aAAwDAQACEQMRAD8A8jSpoaYW5LlNALS5QBblAFABAAAAAAAAAAAAAAClAClAApoApSgFKUApQApQAq1AFpQApRAWlEBaVFAqVdoBSrs2CAuwQU2CCgIKgNCCCiACoAAAUCgFAClCgUKUClKUChSgaClApoq0E0aWlBNGlpQTRoq0EmCLSgkwTBSqaTBopQ0mCYKVAmDRSgaNFKBo0UoGjRSgBSgBSqBAoAUqAFAApcgBtdggsJkLwyqmymIjUz0b6DEF30b6KILvo2UQUSiFUhRLkuVnyk+UpiUuVnyk+UolyLCFE2bDShs2aNC+Js20RKeJMkysCiQizBBKhFmDQVIRZ+BRITKxEUhDIoQgCGza+DwCbNr4SAbFneE+8AbNk7PsDZs+z7A2bX7T7A2bX7PsE2bX7EBNqQE2bWYNKEykyXovSCzJMsrRVmUmSgEybEDF2bQUxdiBgbNgYizJMm02CzJMmygTJMlyWATJMlPYCZJkp7BpMkyex7BpMkyex7dBpMkye2T2yGkybPbPBc8BpsmT2ye2Q0mTGMntk9sgsyTKXJcgsyTKXJcoLMkzylyXILM8k7TZcgs7JnlNgLMkylybFWdkRAWGw2GAhMqKJF2CC7NiEIm1uQAAIQpQIQpQIi0oECrQZI1cGgZI14AZI0UGRV8AyNGgZGgGRpAQUBBQAAAPpfoEFSdAB9H0AAaABoECdAQgAQgAQgAQipQIRQEiRo+f8BmEa+f8Pn/AZhGvn/D5/wABmEa+f8Pn/ANclxz88rvs32FTXPzya5+eTfZMhezXJrn55JntZnsKmuTXJMkz2Hprk+z1yeuewPs1yTPZ657A1ya5T1yTIen2fZMkyRRYkyTJBYkJkmSBCEIBFiQg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"];

	var img = $(".glitch");
	var prefix = "data:image/png;base64,";
	var maxErrors = 50;

	function update() {
		//choose a random image
		var corrupted = data[Math.floor(Math.random() * data.length)];

		if (Math.random() > 0.8) {
			var errors = Math.round(Math.random() * maxErrors);
			for (var i = 0; i < errors; i++) {
				var l = 2000 + Math.round(Math.random() * (corrupted.length - 2002));
				corrupted = corrupted.substr(0, l) + corrupted.charAt(l + 1) + corrupted.charAt(l) + corrupted.substr(l + 2);
			}
		}
		img.attr("src", prefix + corrupted);

	}
	update();
	setInterval(update, 100);

});




//////////////////////////////////////////////////////  //
//    BAR CHART                                         //
//////////////////////////////////////////////////////  //
(function () {
	"use strict";

	// Load the Visualization API and the piechart package.
	google.load('visualization', '1.0', {'packages': ['corechart']});

	// Set a callback to run when the Google Visualization API is loaded.
	google.setOnLoadCallback(drawChart1);
	google.setOnLoadCallback(drawChart2);

	function drawChart1() {
		// Some raw data (not necessarily accurate)
		var data = google.visualization.arrayToDataTable([
			['Month', 'You', 'Competitors'],
			['Jun 14', 233, 1222],
			['Jul 14', 444, 1234],
			['Aug 14', 117, 876],
			['Sep 14', 43, 976],
			['Oct 14', 136, 1053],
			['Nov 14', 122, 1210],
			['Dec 14', 212, 938],
			['Jan 15', 135, 1120],
			['Feb 15', 157, 1167],
			['Mar 15', 139, 1110],
			['Apr 15', 136, 691],
			['May 15', 110, 345]
		]);
		var options = {
			vAxis: {title: "Pieces of Content"},
			hAxis: {title: "Month"},
			width: '1050',
			height: '300',
			colors: ['#00DFFC', '#CBC7C7'],
			backgroundColor: {fill: 'transparent'},
			seriesType: "area",
			series: {
				0: {type: "area"},
				1: {type: "area"}
			}
		};

		var chart1 = new google.visualization.ComboChart(document.getElementById('chart_div1'));

		chart1.draw(data, options);

	}

	function drawChart2() {
		// Some raw data (not necessarily accurate)
		var data = google.visualization.arrayToDataTable([
			['Month', 'You', 'Competitors'],
			['Jun 14', 23, 45],
			['Jul 14', 45, 43],
			['Aug 14', 23, 41],
			['Sep 14', 32, 48],
			['Oct 14', 32, 38],
			['Nov 14', 34, 36],
			['Dec 14', 45, 32],
			['Jan 15', 67, 38],
			['Feb 15', 58, 42],
			['Mar 15', 89, 47],
			['Apr 15', 92, 45],
			['May 15', 110, 53]
		]);
		var options = {
			vAxis: {title: "Pieces of Content"},
			hAxis: {title: "Month"},
			width: '1050',
			height: '300',
			colors: ['#00DFFC', '#CBC7C7'],
			backgroundColor: {fill: 'transparent'},
			seriesType: "area",
			series: {
				0: {type: "area"},
				1: {type: "area"}
			}
		};

		var chart2 = new google.visualization.ComboChart(document.getElementById('chart_div2'));

		chart2.draw(data, options);

	}
})();


//////////////////////////////////////////////////////  //
//    THEATER TYPE TOOL                                 //
//////////////////////////////////////////////////////  //
(function () {
	"use strict";

	// Create a new instance of TheaterJS with defaults options.
	var theater = new TheaterJS();

	// First, describe actors by passing a name,
	// an experience and finally a selector string.
	theater
		.describe("statement", { speed: .8, accuracy: .8, invincibility: 4 }, "#statement")
		.describe("problem-solution",{ speed: 2, accuracy: .8, invincibility: 4 }, "#problem-solution");



	// TheaterJS has a built-in event handler.
	// Here we use it to for 2 things:
	// 1 - Listen to all events (*) and log the code running (scenes).
	// 2 - Add a caret to the proper element when adequate.
	theater
		.on("say:start, erase:start", function () {
			// this refer to the TheaterJS instance.
			var self    = this,

			// The current actor is referenced as this.current
			// Its voice is the third element passed to the describe method.
			// It could be of two types: a DOM element or a function.
				current = self.current.voice;

			// TheaterJS has some useful methods such as
			// addClass, hasClass, removeClass, ...
			// Note: the "saying" class adds the blinking caret.
			self.utils.addClass(current, "saying");
		})
		.on("say:end, erase:end", function () {
			var self    = this,
				current = self.current.voice;

			// When say or erase ends, remove the caret.
			self.utils.removeClass(current, "saying");
		});



	// The write method adds scenes to the theater's scenario.
	// It accepts an indefinite number of parameters and is chainable.
	// theater.write("I:Hello", 400).write("You:Wassup?", 400);
	// Is the same as:
	// theater.write("I:Hello", 400, "Your:Wassup?", 400);
	theater

		// A function is added as a "call" scene.
		// It simply call the passed function by setting
		// the context to the TheaterJS instance.
		// In this case, the toggleClass is simply toggling body's class.
		// Luke has a white background while Vader has a darker one.
		.write(2000)
		.write("problem-solution:have mounds of competitor data?", 900)
		.write("problem-solution:don't know what to do with it?", 900)

		// Previous arguments are just shorthands that build the proper scene object.
		// However, you can pass a scene object with more complex args.
		.write({ name: "call", args: [kill, true] })
		.write("problem-solution:start making sense of that data...", 900)
		.write("statement:The", 600)
		.write(-3)
		.write("statement:Your Intelligent Content Strategy Platform", 900)
		.write("problem-solution:a clear and actionable strategy", 400, " to out rank your competitors!");


		// This last statement makes the scenario loop.
		// The true argument means "restart from scratch".
		//.write(function () { theater.play(true); });


	function kill () {
		var self    = this,
			delay   = 300,
			i       = 0,
			timeout = setTimeout(function blink () {
				if (++i < 6) timeout = setTimeout(blink, delay);
				else self.next();
			}, delay);

		return self;
	}window.theater = theater;
})();



//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //

	$(document).ready(function() {
		"use strict";


		// Show map when user presses enter in #location input,
		// hide map with user starts entering a new location
		$("#location").keydown(function (event) {
			if (event.which == 13) {
				$('#googlemaps, #crt-glitch, #crt-output').removeClass('noopacity');
				$('#googlemaps').addClass('turn-on');
			} else {
				if ($('#googlemaps').hasClass('turn-on')) {
					$('#googlemaps').removeClass('turn-on').addClass('turn-off');
					$('#crt-glitch, #crt-output').addClass('noopacity');
				}
			}

		});

		function createMap() {

			var mapCanvas = document.getElementById('googlemaps');
			var markers = [];
			var offsetLat = 0.04;
			var offsetLng = -0.09;

			// Create an array of styles.
			var styles = [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 13
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#144b53"
						},
						{
							"lightness": 14
						},
						{
							"weight": 1.4
						}
					]
				},
				{
					"featureType": "administrative.locality",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "administrative.locality",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#08304b"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#0c4152"
						},
						{
							"lightness": 5
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#14fdce"
						},
						{
							"lightness": 25
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#0b3d51"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"color": "#146474"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#021019"
						}
					]
				}
			];

			// Create a new StyledMapType object, passing it the array of styles,
			// as well as the name to be displayed on the map type control.
			var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map"});

			var mapOptions = {
				center: new google.maps.LatLng(29.76043, -95.36980),
				zoom: 12,
				disableDefaultUI: true,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
				}
			};

			var map = new google.maps.Map(mapCanvas, mapOptions);
			map.setCenter(new google.maps.LatLng((map.getCenter().lat() + offsetLat), (map.getCenter().lng() + offsetLng)));
			smoothZoom(map, 14, map.getZoom());

			//Associate the styled map with the MapTypeId and set it to display.
			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');

			// Create the search box and link it to the UI element.
			var input = (
				document.getElementById('location')
			);

			var searchBox = new google.maps.places.SearchBox(
				(input)
			);

			// Listen for the event fired when the user selects an item from the
			// pick list. Retrieve the matching places for that item.
			google.maps.event.addListener(searchBox, 'places_changed', function () {
				var places = searchBox.getPlaces();

				if (places.length == 0) {
					return;
				}


				for (var i = 0, marker; marker = markers[i]; i++) {
					marker.setMap(null);
				}

				// For each place, get the icon, place name, and location.
				markers = [];
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0, place; place = places[i]; i++) {
					var image = {
						url: place.icon,
						size: new google.maps.Size(71, 71),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(25, 25)
					};

					// Create a marker for each place.
					var marker = new google.maps.Marker({
						map: map,
						icon: image,
						title: place.name,
						position: place.geometry.location
					});

					markers.push(marker);

					bounds.extend(place.geometry.location);
				}

				map.fitBounds(bounds);

				map.setCenter(new google.maps.LatLng((map.getCenter().lat() + offsetLat), (map.getCenter().lng() + offsetLng)));

				map.setZoom(12);
				smoothZoom(map, 14, map.getZoom());

				// Show map when user selects an item from the pick list
				$('#googlemaps').removeClass('noopacity').addClass('turn-on');
				$('#crt-glitch, #crt-output').removeClass('noopacity');

			});

			// the smooth zoom function
			function smoothZoom(map, max, cnt) {
				if (cnt >= max) {
					return;
				}
				else {
					var z = google.maps.event.addListener(map, 'zoom_changed', function (event) {
						google.maps.event.removeListener(z);
						smoothZoom(map, max, cnt + 1);
					});
					setTimeout(function () {
						map.setZoom(cnt)
					}, 200); // 80ms is what I found to work well on my system -- it might not work well on all systems
				}
			}

			// Bias the SearchBox results towards places that are within the bounds of the
			// current map's viewport.
			google.maps.event.addListener(map, 'bounds_changed', function () {
				var bounds = map.getBounds();
				searchBox.setBounds(bounds);
			});

		}

		google.maps.event.addDomListener(window, 'load', createMap);


		///// AUTOCOMPLETE GEO LOCATION
		$("#location").geocomplete({country: "us"});



  ///// URL INPUT
  var urlinputval = "http://";
  
  $("input[type='url']").focusin(function() {
	  // if textbox is empty or got the default value
	  if ($(this).val().indexOf("http://") == -1) {
		  // Put your Default value back
		  $(this).val(urlinputval + $(this).val());
	  }
  }).focusout(function() {
	  // if textbox is empty or just contains your value
	  if ($(this).val() == "" || $(this).val() == "http://" ) {
		  // Clear the box
		  $(this).val('');
	  }
  });


  ///// HEADER + MODAL ANIMATIONS
  $('.modal').on('show.bs.modal', function () {

	 $('.blurable').addClass('blur');

	 $('.modal.fadeable')
		 .removeClass('animated fadeOut')
		 .addClass('animated fadeIn')
		 .css({'opacity' : '1'});

	 $('.header-centered.fadeable')
		 .removeClass('animated fadeIn')
		 .addClass('animated fadeOut')
		 .css({'opacity' : '0'});

  });
  
  $('.modal').on('hide.bs.modal', function () {

	 $('.blurable').removeClass('blur');

	 $('.modal.fadeable')
		 .removeClass('animated fadeIn')
		 .addClass('animated fadeOut')
		 .css({'opacity' : '0'});

	 $('.header-centered.fadeable')
		 .removeClass('animated fadeOut')
		 .addClass('animated fadeIn')
		 .css({'opacity' : '1'});

  });

  
  ///// SMOOTH SCROLL FIX
  $(function() {
    $('a[href*=#]:not([href=#])').filter(":not(#tabs *)").click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
 
  
  ///// BUTTONS DEPRESSED FIX
  $(".btn, #navbar .navbar-nav *").mouseup(function(){$(this).blur();});

  ///// COUNTUP
  var options = {
	  useEasing : true,
	  useGrouping : true,
	  separator : ',',
	  decimal : '.',
	  prefix : '',
	  suffix : '' 
  };
  
  var inventoryCount01 = new countUp("inventory-count01", 10579, 10954, 0, 3, options);
  var inventoryCount02 = new countUp("inventory-count02", 30435, 30679, 0, 3, options);
  var count01 = new countUp("count01", -3259, -3289, 0, 3, options);
  var count02 = new countUp("count02", -432, -486, 0, 3, options);
  var count03 = new countUp("count03", -12, -6, 0, 3, options);
  var count04 = new countUp("count04", 43, 67, 0, 3, options);
  var count05 = new countUp("count05", 5, 8, 0, 3, options);
  var count06 = new countUp("count06", 0, 1, 0, 3, options);

  $('#inventory-count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount01.start();} return false;});
  $('#inventory-count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount02.start();} return false;});    
  $('#count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count01.start();} return false;});
  $('#count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count02.start();} return false;});
  $('#count03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count03.start();} return false;});
  $('#count04').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count04.start();} return false;});
  $('#count05').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count05.start();} return false;});
  $('#count06').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count06.start();} return false;});


  ///// GIVE KEYWORD FEILD FOCUS ON OPEN OF COMPETITOR MODAL
  $('#competitor').on('shown.bs.modal', function () {
    $('#keyword').focus();
  });


  ///// ENABLE POPOVERS
  $(function () {
	$('[data-toggle="popover"]').popover({
			container: '.findCompetitor',
			placement: 'right',
			trigger: 'hover',
			animation: 'fade in left'
	})
  });


  /////LOADER
  $( "#data" ).on('shown.bs.modal', function(){	
  
	  /* SET LOADER COLOR */	
	  var color = "gray";
	  //var loaded = true;
	  
	  setSkin(color);
	
	  /* COMPETITOR ARRAY */	
	  var competitors = [
		'http://www.abacusplumbing.net', 
		'http://www.rotorooter.com/houston/', 
		'http://www.angieslist.com/companylist/houston/plumbing.htm', 
		'http://en.wikipedia.org/wiki/Plumbing', 
		'http://www.villageplumbing.com', 
		'http://www.yellowpages.com/houston-tx/plumbers', 
		'http://theplumbingsolution.net', 
		'http://www.happyplumber.com/services/', 
		'http://localplumbing.com', 
		'http://www.houstonplumbing.com'
	  ];
	  
	  // Stripes interval
	  var stripesAnim;
	  var calcPercent;
	  var timeoutID;
	  
	  var loading = $('#loading');
	  var progress = $('#loading .progress-bar');
	  var percent = $('#loading .percentage');
	  var stripes = $('#loading .progress-stripes');
	  //stripes.text('////////////////////////');
	  
	  
	  // Call function to load array of competitors
	  preload(competitors);
	  
	  // Call function to animate stripes
	  //stripesAnimate(); 
	  

	  /*** FUNCTIONS ***/
	  
	  /* LOADING */
	  function preload( competitors ) {
	
		  var increment = Math.floor(100 / competitors.length);
	
		  $(competitors).each( function( index ) {
			  
			  var competitor = this;
			  var progressWidth = increment * (index + 1);
		  
			  $(document).queue('competitors', setWidth(progressWidth));
		
		  });
	
	  }


	  function setWidth( progressWidth ) {
		  
	    return function(next){
        	doWidth(progressWidth, next);
		}
		
	  }

	  function doWidth( progressWidth, next ) {
		  
		  var minTime = 100;
		  var maxTime = 200;
		  var time = Math.floor(Math.random()*(maxTime-minTime+1)+maxTime);
		  
		  timeoutID = setTimeout( function(){
	
			  progress.animate({
				  
				  //Change width. Correct for 10% progress number being hidden
				  width: ((progressWidth == 10) ? 12 : progressWidth) + "%"
				  
			  }, 100, function() {
				  
				  if ((progressWidth / 10) <= 5 ) {
				 	 $('#competitor-list-1 li:nth-child(' + progressWidth / 10 + ')').removeClass('noopacity').addClass('animated fadeInLeft');
				  } else {
				  	 $('#competitor-list-2 li:nth-child(' + ((progressWidth / 10) - 5) + ')').removeClass('noopacity').addClass('animated fadeInRight');
				  }
				  
			  });

			  $({countNum: percent.text().slice(0,-1)}).animate({countNum: Math.floor(progressWidth)}, {
					duration: minTime,
					easing:'linear',
					step: function() {
					  percent.text(Math.floor(this.countNum) + "%");
					},
					complete: function() {
					  percent.text(this.countNum + "%");
					}
			  });

			  //loop through the items
			  next();
				  
		  }, time )
			  					 
	  }
	  
	  /* STRIPES ANIMATION */
	  function stripesAnimate() {
		  animating();
		  stripesAnim = setInterval(animating, 2500);
	  }
	
	  function animating() {
		  stripes.animate({
			  marginLeft: "-=30px"
		  }, 2500, "linear").append('/');
	  } 
	  
	  function setSkin(skin){
		  $('.loader').attr('class', 'loader '+ skin);
		  $('#loading h6').hasClass('loaded') ? $('#loading h6').attr('class', 'loaded ' + skin) : $('#loading h6').attr('class', skin);
	  }

	  /* WHEN FINISHED */
	  function completeLoad () {
		  progress.animate({
				  width: "100%"
			  }, 100, function() {
				  $('#loading h6').text('Complete!').addClass('loaded');
				  percent.text('100%');
				  clearInterval(calcPercent);
				  clearInterval(stripesAnim);
		  });
		  $('#data .loading').delay(300).animate({
			  	  opacity: 0
			  }, 1000, function() {
			  	$('#data .loading').addClass('animated fadeOut noopacity nodisplay');
		  });	
		  loading.delay(300).animate({
			  	  opacity: 0,
				  height: 0
			  }, 1000, function() {
			  	$('#loading').attr('class', 'animated fadeOut noopacity nodisplay');
		  });
		  $('#legend, #data-attribution').delay(300).animate({
			  	  opacity: 100
			  }, 1000, function() {
			  	$('#legend, #data-attribution').removeClass('noopacity nodisplay').addClass('animated fadeIn');
				$('#data .modal-header .competitor').removeClass('noopacity nodisplay').addClass('animated fadeIn');
				$('#gotoInventory').removeClass('noopacity nodisplay').addClass('animated fadeIn');
		  });
	
	  }
	  
	  $(document).queue('competitors', function(){
		  completeLoad();
		  clearTimeout(timeoutID);
		  console.log("all done");
	  });
	  
	  $(document).dequeue('competitors');
	  
  });
  
  	  
  ///// DYNAMIC MODAL CONTENT
  $(function() {
	  
	//REGISTRATION MODAL
	var login = $("#login");
    var remind = $("#remind");
    var register = $("#register");
    var gotoRegisterLink = $("#gotoRegister");
    var gotoLoginLink = $("#gotoLogin");
    var gotoRemindLink = $("#gotoRemind");
    var gotoRegisterButton = $("button.gotoRegister");
    var gotoLoginButton = $("button.gotoLogin");

	//SHOW
    var showCompetitor = $(".showCompetitor");
	var showInventory= $(".showInventory");
	var showComparison = $(".showComparison");
	
	//GOTO
	var gotoInventory = $("#gotoInventory");
	var gotoComparison = $("#gotoComparison");	

	//MODAL SCREENS
	var loading = $(".loading");
	var competitor = $(".competitor");
	var competitorAnalyzer = $("#competitor-analyzer");
	var inventory = $("#inventory");
	var user = $("#user");
	var userAnalyzer = $("#user-analyzer");
	var comparison = $("#comparison");
	
    var clearMe1;
    var clearMe2;
	var clearMe3;
    var clearMe4;
    var clearMe5;
	var clearMe6;
	   
    function stopTimer() {
      clearTimeout(clearMe1);
      clearTimeout(clearMe2);
      clearTimeout(clearMe3);
	  clearTimeout(clearMe4);
      clearTimeout(clearMe5);
      clearTimeout(clearMe6);
    }
    
	//REGISTER LINK
    gotoRegisterLink.on("click", function() {  
	
      login.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        login.addClass("nodisplay");
        remind.addClass("nodisplay");
        register.removeClass("nodisplay");
        gotoRegisterLink.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        register.removeClass("noopacity");
        gotoRegisterLink.addClass("nodisplay");
        gotoLoginLink.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoLoginLink.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
    
	//REGISTER BUTTON
    gotoRegisterButton.on("click", function() {  
	
      login.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        login.addClass("nodisplay");
        remind.addClass("nodisplay");
        register.removeClass("nodisplay");
        gotoRegisterLink.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        register.removeClass("noopacity");
        gotoRegisterLink.addClass("nodisplay");
        gotoLoginLink.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoLoginLink.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
	 
	//LOGIN LINK  
    gotoLoginLink.on("click", function() {  
	
      register.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        register.addClass("nodisplay");
        remind.addClass("nodisplay");
        login.removeClass("nodisplay");
        gotoLoginLink.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        login.removeClass("noopacity");
        gotoLoginLink.addClass("nodisplay");
        gotoRegisterLink.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoRegisterLink.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
 	
	//LOGIN BUTTON
    gotoLoginButton.on("click", function() {

		$(document)

			.queue('register', function(next) {

				$(register).addClass("noopacity");
				$(remind).addClass("noopacity");
				clearMe1 = setTimeout(next, 300); // delay

			})

			.queue('register', function(next) {

				$(register).addClass("nodisplay");
				$(remind).addClass("nodisplay");
				$(login).removeClass("nodisplay");
				$(gotoLoginLink).addClass("noopacity");
				clearMe2 = setTimeout(next, 300); // delay

			})

			.queue('register', function(next) {

				$(login).removeClass("noopacity");
				$(gotoLoginLink).addClass("nodisplay");
				$(gotoRegisterLink).removeClass("nodisplay");
				clearMe3 = setTimeout(next, 6000); // delay

			})

			.queue('register', function(next) {

				$(gotoRegisterLink).removeClass("noopacity");
				clearMe4 = setTimeout(next, 300); // delay

			})

			.queue('register', function(){
				stopTimer();
			})

			.dequeue('register');
      
    });  
    
	//REMIND LINK
    gotoRemindLink.on("click", function() {  
	
		register.addClass("noopacity");
		login.addClass("noopacity");
		
		clearMe1 = setTimeout(function (){
		  register.addClass("nodisplay");
		  login.addClass("nodisplay");
		  remind.removeClass("nodisplay");
		  gotoLoginLink.addClass("noopacity");
		}, 300); // delay
		
		clearMe2 = setTimeout(function (){
		  remind.removeClass("noopacity");
		  gotoLogin.addClass("nodisplay");
		  gotoRegisterLink.removeClass("nodisplay");
		}, 350); // delay
		
		clearMe3 = setTimeout(function (){
		  gotoRegisterLink.removeClass("noopacity");
		}, 400); // delay
		
		stopTimer();
      
    });
 
  	/*//COMPETITOR
	function gotoCompetitor() {  
			
		  loading.addClass("noopacity");
		 
		  clearMe1 = setTimeout(function (){
			loading.addClass("nodisplay");
		  }, 300); // delay
		  
		  clearMe2 = setTimeout(function (){
			competitor.removeClass("nodisplay");
		  }, 350); // delay	  
	
		  clearMe3 = setTimeout(function (){
			competitor.removeClass("noopacity");
		  }, 400); // delay
			  
		  stopTimer();
      
    };*/
	
	
	//INVENTORY
	gotoInventory.on("click", function() {  
	
	   $(document)
	   
	   		.queue('inventory', function(next) { 
	   		
				$(competitor).addClass("animated fadeOut");
				clearMe1 = setTimeout(next, 300); // delay
			
			})
			
		    .queue('inventory', function(next) { 
	   		 
				$(competitor).addClass("noopacity nodisplay");
				$(competitorAnalyzer).addClass("animated fadeIn");
				clearMe2 = setTimeout(next, 300); // delay
			
			})
			
			.queue('inventory', function(next) { 
	   		
				$(competitorAnalyzer).removeClass("noopacity nodisplay");
				clearMe3 = setTimeout(next, 6000); // delay
			
			})
			
			.queue('inventory', function(next) { 
	   		
				$(competitorAnalyzer).removeClass("animated fadeIn");
				$(competitorAnalyzer).addClass("animated fadeOut");
				clearMe4 = setTimeout(next, 300); // delay
			
			})
			
			.queue('inventory', function(next) { 
	   		
				$(competitorAnalyzer).addClass("noopacity nodisplay");
				$(inventory).addClass("animated fadeIn");	
				$(user).addClass("animated fadeIn");
				clearMe5 = setTimeout(next, 600); // delay
				
				console.log("this happened");
			
			})
				
			.queue('inventory', function(next) { 
	   		
				$(inventory).removeClass("noopacity nodisplay");
				$(user).removeClass("noopacity nodisplay");	
				clearMe6 = setTimeout(next, 300); // delay
			
			})
			
			.queue('inventory', function(){
				  stopTimer();
			 })
			  
			.dequeue('inventory');
	
    });


	//COMPARISON
	gotoComparison.on("click", function() {  
	
	   $(document)
	   
	   		.queue('comparison', function(next) { 
	   		
				$(inventory).addClass("animated fadeOut");
				$(user).addClass("animated fadeOut");
				clearMe1 = setTimeout(next, 300); // delay
			
			})
			
		    .queue('comparison', function(next) { 
	   		 
				$(inventory).addClass("noopacity nodisplay");
				$(user).addClass("noopacity nodisplay");
				$(userAnalyzer).addClass("animated fadeIn");
				clearMe2 = setTimeout(next, 300); // delay
			
			})
			
			.queue('comparison', function(next) { 
	   		
				$(userAnalyzer).removeClass("noopacity nodisplay");
				clearMe3 = setTimeout(next, 6000); // delay
			
			})
			
			.queue('comparison', function(next) { 
	   		
				$(userAnalyzer).removeClass("animated fadeIn");
				$(userAnalyzer).addClass("animated fadeOut");
				clearMe4 = setTimeout(next, 300); // delay
			
			})
			
			.queue('comparison', function(next) { 
	   		
				$(userAnalyzer).addClass("noopacity nodisplay");
				$(comparison).addClass("animated fadeIn");	
				clearMe5 = setTimeout(next, 300); // delay
			
			})
				
			.queue('comparison', function(next) { 
	   		
				$(comparison).removeClass("noopacity nodisplay");
				clearMe6 = setTimeout(next, 300); // delay
			
			})
			
			.queue('comparison', function(){
				  stopTimer();
				  console.log("comparison queue is done");
			 })
			  
			.dequeue('comparison');
	
    });
	
	
	
	/*ANALYZER
	gotoAnalyzer.on("click", function() {  
			
		  $(inventory).delay(300).animate({
			  	  opacity: 100,
			  }, 300, function() {
			  	$(inventory).addClass("noopacity nodisplay");
		  });
		  
		  $(user).delay(300).animate({
			  	  opacity: 100,
			  }, 300, function() {
			  	$(user).addClass("noopacity nodisplay");
		  });

		  $(analyzer).delay(600).animate({
			  	  opacity: 100,
			  }, 300, function() {
			  	$(analyzer).removeClass("noopacity nodisplay");
				$('#modal-header .analyzer').addClass("animated fadeInDown");
		  });
		  	      
    });*/

	  /*//COMPARISON
	function gotoComparison() {  
	
		  dataAnalyzer.addClass("noopacity");
		 
		  clearMe1 = setTimeout(function (){
			dataAnalyzer.addClass("nodisplay");  
		  }, 300); // delay
		  
		  clearMe2 = setTimeout(function (){
			comparison.removeClass("nodisplay");
		  }, 350); // delay	  
	
		  clearMe3 = setTimeout(function (){
			comparison.removeClass("noopacity");
		  }, 400); // delay
			  
		  stopTimer();
      
    }*/
	
	
    return false;
    
  });

//////////////////////////////////////////////////////  //
//    DOCUMENT READY: EVENTS ON MOBILE                  //
//////////////////////////////////////////////////////  //
  if ($(window).width() < 768) {
    
    ///// DON'T SCROLL ON TABS
    $('#navbar .nav a').filter(":not(#tabs *)").on('click', function(){
      $("#navbar-header .navbar-toggle").on("click");
      return false;
    });
    
  } // EVENTS ON MOBILE ENDS HERE


//////////////////////////////////////////////////////  //
//    DOCUMENT READY: EVENTS ON DESKTOP                 //
//////////////////////////////////////////////////////  // 
  if ($(window).width() > 768) {
    
    ///// SCROLL ANIMATIONS
    $('.anim-from-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInRight');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    
    $('.anim-from-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInLeft');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    
    $('.anim-fade-in').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeIn');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });

    $('.anim-fade-out').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is invisible in the viewport
        $(this).addClass('animated fadeOut');
        $(this).css({'opacity' : '0'});
      }
       return false;
    });
	
    $('.anim-fade-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-fade-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceIn');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInLeft');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInRight');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-zoom-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated zoomInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-zoom-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated zoomInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
  } // EVENTS ON DESKTOP ENDS HERE
  
}); // DOCUMENT READY ENDS HERE