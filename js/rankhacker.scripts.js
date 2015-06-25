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
function glitch() {

	var data = ["/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzIzMDVBNEY4MzgxMUU0QkUwQTk0NDUwNThDQTE5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzIzMDVBNUY4MzgxMUU0QkUwQTk0NDUwNThDQTE5OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MjMwNUEyRjgzODExRTRCRTBBOTQ0NTA1OENBMTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MjMwNUEzRjgzODExRTRCRTBBOTQ0NTA1OENBMTk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAFBAQGRIZJxcXJzImHyYyLiYmJiYuPjU1NTU1PkRBQUFBQUFERERERERERERERERERERERERERERERERERERERAEVGRkgHCAmGBgmNiYgJjZENisrNkREREI1QkRERERERERERERERERERERERERERERERERERERERERERERERERE/8AAEQgA+QHgAwEiAAIRAQMRAf/EAGkAAQEBAQEAAAAAAAAAAAAAAAABAgMGAQEBAQEAAAAAAAAAAAAAAAAAAQIDEAEAAgEEAwADAQADAQAAAAAAAREh8FFhEoGRAjFxoeFBIhPxEQEBAQEBAQEAAAAAAAAAAAAAESGBAWFR/9oADAMBAAIRAxEAPwDyOTJRTTmZKkpaBMlSUUKVJUlFAVJUlFAVJUnUoCpKkooDJkooDJUlFAZMnVKBclSnU6guTKdVoATqvUDIlLQAUUAFFCAUUALSUALRQIZWigQWigQWihagtFCILRQVKKWjqFQpaKFqUUtFCVKKWkoUopaSgAo6gWXIIFyWAFlyAFlyAFyXIAWWAFlmDAFlmDACWuCoAtLWoKgEUqCoACoKgAKgqAAqEqAUyVBUAZ3MlQVABZUGAMlmDAAYAMgAZLDABYAAAAAAAAYBFMAIpgwCCmAQXBgKC187rXzuCI1UblRuCYMGDC6GDBgwmoVBgwuDRKgwYXAIUv8A1MAlC/8AU/68qJr8i188+kqN59ABUbz6K+efQpQtfPPor559AgtfPPor559BiI1Xzz6K+efQYgtfPPor559BiC188+ivnn1/oYiNdfnn0dfnn0GMjVfPPor559BjI11+efR1+efQXxka6/PPo6/PPoKyNdY59HX559BWRqvnn0VHPoSsjVRz6Kjn0FZwXDVRz6KjlBnBhrHJgVLguFweAS4ML4MbCJgwuNjGwJgwuNjGwJjgwuNi42BMcGOFxsY2n2onktkRWr5L5ZAastkUatLQBbLQBbLQBbLQBbLQBbLQBbLQCLZaZAW0sMgqGTIBZkyBZZkyAtpkBRMgKYQBTCAKYQBoZEGsDIDQyA0MijSIUgohSiiUAolFAolFAolFAtSVK+EAqSpPABUlB4AqSgAooooCipKKAqSpKKAqTJRQFSUUUBQUtAytLUlSCULUlSIyZayZCs5MtVJUi1nJlrJUhWcmWslSFZuRozuFZsayZCsjWTIVkayZCsjWTIVkprJkKiU0XIJQuQEpFAEUAKKUEKKKAopaSgKKKWgQKEUCihAKKkAKKkAKKAFpKQBaSlAor9gAHsABACilUCigAoowS1sopL4AUUUApSiALQApKAYJKAYCgBSgFCAAoBRQAUUIBRQFBRQFFFFAUUFAUUUUC42SoWv2dY5QTBUbLjkqOQiVGxUbLUcpgIY2MFCrDBgoCGDCBBcLhkoiNXBcJUFQQW4LhKhagC4LgqDrAJZa9YOoJZa9TqBZcHU6hSyzqdRMLLOp1DCyzqdSBZZ1OouFovU6hSUWoKgEUqCoAssqCoEAqNio2QLDGxjYqwCoKjYpA8GI/wCExsEAxsYFgGEwpGrLZwYILa2zgwRFsswYIJRS4KRUoWihEFopRBaKBBa1R11QIL11R14/gIL14/hXH8BBeuqOvAIL14/h14/gIL14K4/gIL1K4BBanYoVBaKBClooEopaKBKKWigSiloBKKUBKgqFBEqCoUBKgqFASoMLZYJgwtqDODDQDNwXDQDNwXDR5BnBcNAM3BcL5AS4LhSgTAoALf69f4X+vX+KILf69f4XPHr/AAEFv9ev8L/Xr/AQXt+vRf69Agt/r0X+vSCehb/Xov8AQIF/r0X+gAss0Ass0DwtoB4ADAFBBTWshUsXWsmtZCoLrWTWshULa1rKa1kSoa/C61lc868hWdfguN/4t869rc868hWLLaud9ey5317VU1+C2rnfXsud515SnGSZhrtO868l/W868lOMlxu1c7zryXO868lGbLav63kv63kGbLa7fW8l/XIMlr2neVv65Bmy2r+uS/rkGbLa7TynaeQSy1uZLkEste0naQ4llrcp2NFvktKKggtmEqCoILZccpUGCC4McpUFQguOS45SioUW/wBmEooDBgooUwFFBSoMFFBSoKgopQwFFCUCikAK1RWqACtUVqgArVFaoAWtUVqgArVFaoEF1+DX4BBdfg1+AQK1S1qgEuDX4NfgC4Lg1+DX4AuC4DX4AuC4Nfg1+ALguDX4ALguApCFwXAAXBcAoXBcABcFwUAWWdjtwQLS17cHbggWWduC+CBZZfBfBAC+CyAF8F8EAL4L4IABAAIABAAIABAAIYAlEXFMiERcmUUgZMmTJAyZMmSBkyZMkUyZRcrEMmTOoMpADJkALkuQDJkuQMhkuQAyXOoADJkAXKVOoIAuUqSALkqSC9/rj0dvrUM+TyJGu31qDt9ahnO5ncWNdvrUHb61DOTIRrt9ag7fWoZAjXb61B2+tQgJF7fWoO31qEPAL2+tQdvrUJ4PAL2+tQd/rUJ4PBFvq9vrUJf0eDwQvqX9Lf0eDwaaX9Ez9Hg8GnDv9Hf6PB4XTPw/9Po/9J3K4PATz8Xt9Hb7TwVwiT4vb7O30ngiL/4IT4vb7O32lV/wVwQi9vrk7fXKVwlEI12++Tt97ynWUoI12+95O33ynVOoTxrt97ydvveWepQRrt97ydvveWepQRrt97yX97yzRQRrt97yX9byzRQsav63kv73liilI3f1vPsv63n2xSoRq/refaX9bz7QEi39bz7L+t59oBFv63n2t/e8+09F/ogdvv8AFz7L+t59no9EEzut/W/9L/Rf6It9SyzyeQLCuUoVbEqF8qAXyXyiAXyXyAF8nkAPJfKgHk8oAFlACygHkwUACgAUAPJQAAAAC4AAMABgwAGDAHgMGCgGDBVCzCYKRSyoKgoWGECNUlJhcCQopMLUAqUVBQFBRQAUAUUtfor9JV6lQtRuCnSo3KjcA6VBUCB1ajkxzrygHVxzryY5SigXHKY5WuYK5gMTHJjlajeEmBFxvJjeSo3gqNxcSZ/Zf7Wo3KjcL4l/stajcqNwqWW1jdKjcSpZbWN4JreArPsaxvBcbwIiNY3gxvAILcbwnmPQoYMb/wAPMegA8/w8/wAADG5jdFQXG55BMGFxuuNwZwYXG5jcpEwYXyY3WomDC+QImFwARMLjX/wQWGDB+xSGDGwuEEwY2XBgTExsY2XBgXEAVAMIC2GCgDIAAABRgAKKACioACikAKKACilBFooEUKAAoAAAAAtFAAALACywALACywAAAS1AAAAAAAAAAAAwAtlsCYjfY7apgUxuztqmAMb7ao7fr0wBjfb9ejtqmAMb7aovVMAY3eqO06hgDG+06hL1TIGNXqi51DIGNXOoLlkDGrLlkFxrJlkMGsmWAwbyXLAmDdyZYDBu5W5cwwdLktzFxMb/ACMArpZbmA6WW5iYu/XXtO6duXMM+I6duTtO7mGfEx07zudp3cxcMdO87neXMMMdO87nad3NQxvvO53ndgDG+87nad2FDGu07nad2FDGu07p2ndAMXtO52ndAMf/2Q==", "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzIzMDVBOEY4MzgxMUU0QkUwQTk0NDUwNThDQTE5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RTJDNDM4NkY4MzkxMUU0QkUwQTk0NDUwNThDQTE5OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3MjMwNUE2RjgzODExRTRCRTBBOTQ0NTA1OENBMTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3MjMwNUE3RjgzODExRTRCRTBBOTQ0NTA1OENBMTk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAFBAQGRIZJxcXJzImHyYyLiYmJiYuPjU1NTU1PkRBQUFBQUFERERERERERERERERERERERERERERERERERERERAEVGRkgHCAmGBgmNiYgJjZENisrNkREREI1QkRERERERERERERERERERERERERERERERERERERERERERERERERE/8AAEQgA+QHgAwEiAAIRAQMRAf/EAGQAAQEBAQEAAAAAAAAAAAAAAAABAgMGAQEBAQAAAAAAAAAAAAAAAAAAAQIQAQEAAgICAgMBAQEAAAAAAAARASFRYZES8IFxAiKhMUERAQEBAAMAAAAAAAAAAAAAAAARIQFhgf/aAAwDAQACEQMRAD8A8jSpoaYW5LlNALS5QBblAFABAAAAAAAAAAAAAAClAClAApoApSgFKUApQApQAq1AFpQApRAWlEBaVFAqVdoBSrs2CAuwQU2CCgIKgNCCCiACoAAAUCgFAClCgUKUClKUChSgaClApoq0E0aWlBNGlpQTRoq0EmCLSgkwTBSqaTBopQ0mCYKVAmDRSgaNFKBo0UoGjRSgBSgBSqBAoAUqAFAApcgBtdggsJkLwyqmymIjUz0b6DEF30b6KILvo2UQUSiFUhRLkuVnyk+UpiUuVnyk+UolyLCFE2bDShs2aNC+Js20RKeJMkysCiQizBBKhFmDQVIRZ+BRITKxEUhDIoQgCGza+DwCbNr4SAbFneE+8AbNk7PsDZs+z7A2bX7T7A2bX7PsE2bX7EBNqQE2bWYNKEykyXovSCzJMsrRVmUmSgEybEDF2bQUxdiBgbNgYizJMm02CzJMmygTJMlyWATJMlPYCZJkp7BpMkyex7BpMkyex7dBpMkye2T2yGkybPbPBc8BpsmT2ye2Q0mTGMntk9sgsyTKXJcgsyTKXJcoLMkzylyXILM8k7TZcgs7JnlNgLMkylybFWdkRAWGw2GAhMqKJF2CC7NiEIm1uQAAIQpQIQpQIi0oECrQZI1cGgZI14AZI0UGRV8AyNGgZGgGRpAQUBBQAAAPpfoEFSdAB9H0AAaABoECdAQgAQgAQgAQipQIRQEiRo+f8BmEa+f8Pn/AZhGvn/D5/wABmEa+f8Pn/ANclxz88rvs32FTXPzya5+eTfZMhezXJrn55JntZnsKmuTXJMkz2Hprk+z1yeuewPs1yTPZ657A1ya5T1yTIen2fZMkyRRYkyTJBYkJkmSBCEIBFiQgiwnSQA9SdACzo9UAX16PX8oCL69Hr1lFAnWT1xxn59IAsx38+j16z8+kBVmOM/PomOM/PpAFmOM/PomOM/PpIvgCY4z8+iY7+fR4PAExxn59GuM/Po8HgQ1xn59GuM/Pon4J+ANcZ+fRrtJ+Fn4FJjjPz6JjsmOiY6AmOyY7J+CfgDXZMdk/BPwCaXXaT8EA0ukhCCeDwtKCeCfhaUEn4J+FpQSfgn4WlQTweFpRUFoIgoCKCgigIoAAAAAGwA2bADYACoUFIlKCiUoLEn5KUFEKAABPyABCABCBQIRKtAhClQSKUoAUqgFKCKFA1yTHKz9ec+CfrznwomuTXPzws/XvwT9O/AJrk1ys/Tvwfz34BDXK/wA9+D+e/CCaNL/Pfg/nvwCaNL/Pfg/nvwCaNL/Pfg/nsEFzn9e1v6d+BdZFv69l/XsNSBcFwppCFwtwJqQi39ey/r2FRG/57P57Cs6Rv+ez+ewvTOk03/PZ/PZhWF01/PZ/PZhWdGmv57P54yYVnRcNfzxk/njJhembgxnC/wA8ZP54yYXpKXDX88ZP54yYJcJWr+vGT+eMmDNNLf14yX9eMglwXDV/XjKX9eMglwXC39eM+S/rxnyCXBcLf14z5L+vGfKCXBcLccZ8l/XjPkEuC4X2/XjPkv68Z8glwXC3HGfK+368Z8gzorXt+vGfJ7Y4/wBBm4Lhc/tj/wAwe2OP9FT6PoBC44LjgAwuOC4AMLg0AGl0lAXRpKURddGukpQXXRrpKXBBddEx0lCC66JjpLgpFXXRMdJS4ILMJMclwLCk7J2tSguujXSVSBro10lKRF8BfnzKUgHhUIoLRIILSgh4WpQPo+lQD6PoAPrB9YBTC9F6AML0X8AhhfwtTZsMW/IX5E2bBb8hcfMG02Itx8wXHzCXK3Khr5guPmDabBFNkyips2syTJqptdnrngmQPrIeueD1zwIeTyeueF9c8ZDEPK+ueMnrnjIJvsX1zxlPXPAGzazPZM8Amza+ueMnrnjKUibFzjOP/EVYGwCGwAgAIC7JkEFmSZBCLsgJCEWGCQhCGBCEIYEIAEIQgEIbICQiz5SZ+ZFIkWfKTPzIJMnhZn5kmfmQp4PBM/Mk+UDwEz8yT5RA8E+UnygBPlJ+PIBCfKs/HkoRF9snsaqKlKAfP+FKBPkJ8gUAhoUIQpQIka9sntnkKkM4X2zymc3/AKiVIsW5PbPKrWYvqvtnk9s8iVIeq+2eU9s8oHqep7Z5LnkF9SYT2zye2eQ1YTCe2ecntnnIiwie2ecntnnILDylzzkuecir5Mpc8rc8gnk8rc85LnkDyeS55yXPOQAueS9geTGKXPJcgTJMl7yXKaoFylXUXYlz2UAKUUClAAqlIvrlKUF9cnrlKVEvK+uT1ylSi3ldm1mOSYEqbNrMckwpUmTazBMBU2bWY5yTHORKguuf8Jjn/AqbNro1yCQi6NfMAkJldfMJoUmSLo0CQho0BCZLg0BCFwXCBCBcAQNGgA0aADRoEUmDSgGiABMEwAEwTCAL/J/IILo0FSEWfqaUqQi6NBUgv8mgqQXRoSps2uuMmuMgmza67Ndgmza3HGTXGQTZtddmuAZpWqVFYq1qlLyM0rVKVWaVulyVGKVq5AZpWrkBmlaLkGaNXIDNK1c8lzyDNK1c8lzyUZpWrnkueSjNK1c8lzyDNK1c8lzyDNK1c8lzyDNK1c8lyDNK1clyDNGrk9s9gzclauey5Bm5Llq5LkGbkuWrkuQZuS5auS5BnZtq5Ngzs21s2DO023suRWZkmWqFRmZNtBRmZJlogMzJMtQgJMpMtQBmZWZ4WAAlyVMIolyUIqFKYLsSlBT7SgLOzGO0AWdk7SlBqdk7ZpUGp2TtkVGp2TtkoRqdk7ZpRY1OyY5x/rJQa1zj/Sd4/wBZpQa1zj/SY5x/rNKg1Mc4/wBNc4/1mlFa1zj/AE1zj/WaVRrXOP8ASY5x/rNKgUpSqFKUpgUxmnsVaKJSokUSlCKRKUIsIlKEWJMlSlGoRKhRrGCMgNQmGQG5g0xQG9EwwBClahFMQWYIGM3CkwsxyGILMcpMcgCzHKTHIJ4FmCYDAJ2THICLMcgGw+z7BF2H2Bs2fZOwSqTsnYYGz7wfYAfeD7AD7PsAPs+wA+wAACi6QClXRoEpV0aBKVdGgSlXSaUKVdJpBalNGgKVdJoAq6TQJ9r9mjQH2fa6NAn2fa6J+QPBfwyGo14PDIaNeDwyLo14PDIaNeDXTIaq+F8MhqNeDwyGjRWQ0aKyJq41T2YFMb9j2YAxv2KxkDHSlchEx1qVzAx0pWA0bvZe2FNFva3HKYDVW45L2BqF7L2oaJey9/4qmjN7/wAL3/jQaM3svf8Aihol7L20GjN7L20GjN7L20KM3svbQDN+QqqDN+QvyNICXHzCXHzDYDNx8wXHzCiK/9k="];

	var img = $(".glitch");
	var prefix = "data:image/png;base64,";
	var maxErrors = 50;
	var glitchCount = 0;
	var corrupted = data[Math.floor(Math.random() * data.length)]; //corrupt the data

	if (Math.random() > 0.8) {
		var errors = Math.round(Math.random() * maxErrors);
		for (var i = 0; i < errors; i++) {
			var l = 2000 + Math.round(Math.random() * (corrupted.length - 2002));
			corrupted = corrupted.substr(0, l) + corrupted.charAt(l + 1) + corrupted.charAt(l) + corrupted.substr(l + 2);

		}
	}
	img.attr("src", prefix + corrupted);

}

//////////////////////////////////////////////////////  //
//    BAR CHART                                         //
//////////////////////////////////////////////////////  //
function drawCharts(annualData, monthlyData, weeklyData) {
    
        var userData1 = new Array(12);
        var competitorData1 = new Array(12);
        var datesData = new Array(12);

        var currentDate = new Date();
        currentDate.setDate(1);
        
        for(var e=0; e<annualData.length; e++)
        {
            var tempData = annualData[e].split(":");
            userData1[e] = parseInt(tempData[0]);
            competitorData1[e] = parseInt(tempData[1]);
            
            var newdate = new Date(currentDate);
            newdate.setMonth(newdate.getMonth() - (11-e));
            datesData[e] = $.datepicker.formatDate("M y", new Date(newdate));
        }

        var data1 = google.visualization.arrayToDataTable([
                ['Month', 'You', 'Competitors'],
                [datesData[0], userData1[0], competitorData1[0]],
                [datesData[1], userData1[1], competitorData1[1]],
                [datesData[2], userData1[2], competitorData1[2]],
                [datesData[3], userData1[3], competitorData1[3]],
                [datesData[4], userData1[4], competitorData1[4]],
                [datesData[5], userData1[5], competitorData1[5]],
                [datesData[6], userData1[6], competitorData1[6]],
                [datesData[7], userData1[7], competitorData1[7]],
                [datesData[8], userData1[8], competitorData1[8]],
                [datesData[9], userData1[9], competitorData1[9]],
                [datesData[10], userData1[10], competitorData1[10]],
                [datesData[11], userData1[11], competitorData1[11]]
        ]);
        var options1 = {
                vAxis: {title: "Pieces of Content"},
                hAxis: {title: "Month"},
                width: '1050',
                height: '300',
                colors: ['#14fdce', '#CBC7C7'],
                backgroundColor: {fill: 'transparent'},
                seriesType: "area",
                series: {
                        0: {type: "area"},
                        1: {type: "area"}
                }
        };

        var chartAnnual = new google.visualization.ComboChart(document.getElementById('chart-annual'));
        chartAnnual.draw(data1, options1);


        // Some raw data (not necessarily accurate)
        var userData2 = new Array(4);
        var competitorData2 = new Array(4);
        for(var e=0; e<monthlyData.length; e++)
        {
            var tempData = monthlyData[e].split(":");
            userData2[e] = parseInt(tempData[0]);
            competitorData2[e] = parseInt(tempData[1]);
        }

        var data2 = google.visualization.arrayToDataTable([
                ['Week', 'You', 'Competitors'],
                ['Week 1', userData2[0], competitorData2[0]],
                ['Week 2', userData2[1], competitorData2[1]],
                ['Week 3', userData2[2], competitorData2[2]],
                ['Week 4', userData2[3], competitorData2[3]]
        ]);
        var options2 = {
                vAxis: {title: "Pieces of Content"},
                hAxis: {title: "Week"},
                width: '1050',
                height: '300',
                colors: ['#14fdce', '#CBC7C7'],
                backgroundColor: {fill: 'transparent'},
                seriesType: "area",
                series: {
                        0: {type: "area"},
                        1: {type: "area"}
                }
        };

        var chartMonthly = new google.visualization.ComboChart(document.getElementById('chart-month'));
        chartMonthly.draw(data2, options2);


        // Some raw data (not necessarily accurate)
        var userData3 = new Array(7);
        var competitorData3 = new Array(7);
        for(var e=0; e<weeklyData.length; e++)
        {
            var tempData = weeklyData[e].split(":");
            userData3[e] = parseInt(tempData[0]);
            competitorData3[e] = parseInt(tempData[1]);
        }

        var data3 = google.visualization.arrayToDataTable([
                ['Day', 'You', 'Competitors'],
                ['Day 1', userData3[0], competitorData3[0]],
                ['Day 2', userData3[1], competitorData3[1]],
                ['Day 3', userData3[2], competitorData3[2]],
                ['Day 4', userData3[3], competitorData3[3]],
                ['Day 5', userData3[4], competitorData3[4]],
                ['Day 6', userData3[5], competitorData3[5]],
                ['Day 7', userData3[6], competitorData3[6]]
        ]);
        var options3 = {
                vAxis: {title: "Pieces of Content"},
                hAxis: {title: "Day"},
                width: '1050',
                height: '300',
                colors: ['#14fdce', '#CBC7C7'],
                backgroundColor: {fill: 'transparent'},
                seriesType: "area",
                series: {
                        0: {type: "area"},
                        1: {type: "area"}
                }
        };

        var chartWeekly = new google.visualization.ComboChart(document.getElementById('chart-week'));
        chartWeekly.draw(data3, options3);
}

(function() {
        //////////////////////////////////////////////////////  //
	//    DYNAMIC CHART SWAP                                //
	//////////////////////////////////////////////////////  //

		//////////////////////////////////////////////////////  //
		//    CLEAR TIMEOUTS	  		            		    //
		//////////////////////////////////////////////////////  //
		var clearChart1;
		var clearChart2;
		var clearChart3;

		function stopTimer() {
			clearTimeout(clearChart1);
			clearTimeout(clearChart2);
			clearTimeout(clearChart3);
		}

		//////////////////////////////////////////////////////  //
		//    REGISTRATION  & LOGIN MODAL		  		        //
		//////////////////////////////////////////////////////  //
		var annualBox = $("#box-annual");
		var monthBox = $("#box-month");
		var weekBox = $("#box-week");
		var annualChart = $(".chart-annual");
		var monthChart = $(".chart-month");
		var weekChart = $(".chart-week");
                
                /*var annualBox = document.getElementById('box-annual');
                var monthBox = document.getElementById('box-month');
                var weekBox = document.getElementById('box-week');
                var annualChart = document.getElementById('chart-annual');
                var monthChart = document.getElementById('chart-month');
                var weekChart = document.getElementById('chart-week');*/

		//////////////////////////////////////////////////////  //
		//    ANNUAL			  		            		    //
		//////////////////////////////////////////////////////  //
		$(annualBox).on("mouseover", function() {

			$(document)

				.queue('annualSwap', function(next) {
					//console.log("annual hover");
					$(monthChart).addClass("noopacity");
					$(weekChart).addClass("noopacity");
					//clearChart1 = setTimeout(next, 50); // delay

				})

				.queue('annualSwap', function(next) {

					$(monthChart).addClass("nodisplay");
					$(weekChart).addClass("nodisplay");
					$(annualChart).removeClass("nodisplay");
					//clearChart2 = setTimeout(next, 50); // delay

				})

				.queue('annualSwap', function(next) {

					$(annualChart).removeClass("noopacity");
					//clearChart3 = setTimeout(next, 50); // delay

				})

				.queue('annualSwap', function(){
					stopTimer();
				})

				.dequeue('annualSwap');

		});

		//////////////////////////////////////////////////////  //
		//    MONTHLY			  		            		    //
		//////////////////////////////////////////////////////  //
		$(monthBox).on("mouseover", function() {

			$(document)

				.queue('monthSwap', function(next) {
					//console.log("month hover");
					$(annualChart).addClass("noopacity");
					$(weekChart).addClass("noopacity");
					//clearChart1 = setTimeout(next, 50); // delay

				})

				.queue('monthSwap', function(next) {

					$(annualChart).addClass("nodisplay");
					$(weekChart).addClass("nodisplay");
					$(monthChart).removeClass("nodisplay");
					//clearChart2 = setTimeout(next, 50); // delay

				})

				.queue('monthSwap', function(next) {

					$(monthChart).removeClass("noopacity");
					//clearChart3 = setTimeout(next, 50); // delay

				})

				.queue('monthSwap', function(){
					stopTimer();
				})

				.dequeue('monthSwap');

		});

		//////////////////////////////////////////////////////  //
		//    WEEKLY			  		            		    //
		//////////////////////////////////////////////////////  //
		$(weekBox).on("mouseover", function() {

			$(document)

				.queue('weekSwap', function(next) {
					//console.log("week hover");
					$(monthChart).addClass("noopacity");
					$(annualChart).addClass("noopacity");
					//clearChart1 = setTimeout(next, 50); // delay
				})

				.queue('weekSwap', function(next) {

					$(monthChart).addClass("nodisplay");
					$(annualChart).addClass("nodisplay");
					$(weekChart).removeClass("nodisplay");
					//clearChart2 = setTimeout(next, 50); // delay

				})

				.queue('weekSwap', function(next) {

					$(weekChart).removeClass("noopacity");
					//clearChart3 = setTimeout(next, 50); // delay
				})

				.queue('weekSwap', function(){
					stopTimer();
				})

				.dequeue('weekSwap');

		});
})();

//////////////////////////////////////////////////////  //
//    THEATER TYPE TOOL                                 //
//////////////////////////////////////////////////////  //
(function () {
	"use strict";

	var theater = new TheaterJS();
	var current;

	theater
		.describe("statement", { speed: .8, accuracy: .8, invincibility: 4 }, "#statement")
		.describe("problem-solution",{ speed: 2, accuracy: .8, invincibility: 4 }, "#problem-solution");

	theater
		.on("say:start, erase:start", function () {
			var self    = this,
				current = self.current.voice;

			self.utils.addClass(current, "saying");

		})
		.on("say:end, erase:end", function () {
			var self    = this,
				current = self.current.voice;

			self.utils.removeClass(current, "saying");
		});

	theater
		.write(2000)
		.write("problem-solution:uncover your competitor's offsite content strategy", 400, " to out rank them!")
		.write("statement:The Content Intelligence Platform", 900);


	function kill () {
		var self    = this,
			delay   = 300,
			i       = 0,
			timeout = setTimeout(function blink () {
				if (++i < 6) timeout = setTimeout(blink, delay);
				else self.next();
			}, delay);

		return self;
	}

	window.theater = theater;

})();

//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //
$(document).ready(function() {
	"use strict";

	//////////////////////////////////////////////////////  //
	//    CREATE MAP                                        //
	//////////////////////////////////////////////////////  //

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



		//Create Map Glitch
		$('#crt-glitch, #crt-output').removeClass('noopacity');

		var glitchCount = 0;

		var myGlitch = setInterval(function(){

			glitchCount++;

			if (glitchCount > 30 ) {
				clearInterval(myGlitch);
				$('#crt-glitch,#crt-output').addClass('noopacity');
				console.log('glitch done');
			}

			glitch();

		}, 100);


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


	//////////////////////////////////////////////////////  //
	//    SHOW MAP					                        //
	//////////////////////////////////////////////////////  //
	// Show map when user presses enter in #location input,
	// hide map with user starts entering a new location
	//////////////////////////////////////////////////////  //
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

	//////////////////////////////////////////////////////  //
	//    AUTOCOMPLETE GEO LOCATION					        //
	//////////////////////////////////////////////////////  //
	$("#location").geocomplete({country: "us"});

	//////////////////////////////////////////////////////  //
	//    URL INPUT									        //
	//////////////////////////////////////////////////////  //
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

	//////////////////////////////////////////////////////  //
	//    SMOOTH SCROLL FIX			            		    //
	//////////////////////////////////////////////////////  //
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

	//////////////////////////////////////////////////////  //
	//    BUTTONS DEPRESSED FIX		            		    //
	//////////////////////////////////////////////////////  //
	$(".btn, #navbar .navbar-nav *").mouseup(function(){$(this).blur();});

	/*//////////////////////////////////////////////////////  //
	//    COUNTUP			  		            		    //
	//////////////////////////////////////////////////////  //
	var options = {
		useEasing : true,
		useGrouping : true,
		separator : ',',
		decimal : '.',
		prefix : '',
		suffix : ''
	};

	var inventoryCount01 = new countUp("inventory-count01", 456, 487, 0, 3, options);
	var inventoryCount02 = new countUp("inventory-count02", 1645, 1723, 0, 3, options);
	var inventoryCount03 = new countUp("inventory-count03", 23432, 23586, 0, 3, options);
	var count01 = new countUp("count01", -3259, -3289, 0, 3, options);
	var count02 = new countUp("count02", -432, -486, 0, 3, options);
	var count03 = new countUp("count03", -12, -6, 0, 3, options);

	$('#inventory-count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount01.start();} return false;});
	$('#inventory-count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount02.start();} return false;});
	$('#inventory-count03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount03.start();} return false;});
	$('#count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count01.start();} return false;});
	$('#count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count02.start();} return false;});
	$('#count03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count03.start();} return false;});*/

	//////////////////////////////////////////////////////  //
	//    LOADER			  		            		    //
	//////////////////////////////////////////////////////  //
	/*$( "#data" ).on('shown.bs.modal', function(){

		//////////////////////////////////////////////////////  //
		// Set loader color
		//////////////////////////////////////////////////////  //
		var color = "gray";

		setSkin(color);

		//////////////////////////////////////////////////////  //
		// Set competitor array
		//////////////////////////////////////////////////////  //
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

		var calcPercent;
		var timeoutID;

		var loading = $('#loading');
		var progress = $('#loading .progress-bar');
		var percent = $('#loading .percentage');

		//////////////////////////////////////////////////////  //
		// Call function to load array of competitors
		//////////////////////////////////////////////////////  //
		preload(competitors);

		//////////////////////////////////////////////////////  //
		// Loading
		//////////////////////////////////////////////////////  //
		function preload( competitors ) {

		  var increment = Math.floor(100 / competitors.length);

		  $(competitors).each( function( index ) {

			  var competitor = this;
			  var progressWidth = increment * (index + 1);

			  $(document).queue('competitors', setWidth(progressWidth));

		  });

		}

		//////////////////////////////////////////////////////  //
		// Set width
		//////////////////////////////////////////////////////  //
		function setWidth( progressWidth ) {

			return function(next){
				doWidth(progressWidth, next);
			}

		}

		//////////////////////////////////////////////////////  //
		// Make width adjustment
		//////////////////////////////////////////////////////  //
		function doWidth( progressWidth, next ) {

			var minTime = 100;
			var maxTime = 200;
			var time = Math.floor(Math.random()*(maxTime-minTime+1)+maxTime);

			//////////////////////////////////////////////////////  //
			// Time the width adjustments
			//////////////////////////////////////////////////////  //
			timeoutID = setTimeout( function(){

				progress.animate({

					//////////////////////////////////////////////////////  //
					// Change width. Correct for 10% progress number
					// being hidden
					//////////////////////////////////////////////////////  //
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

				//////////////////////////////////////////////////////  //
				// Loop through the items
				//////////////////////////////////////////////////////  //
				next();

			}, time )

		}

		//////////////////////////////////////////////////////  //
		// Set skin
		//////////////////////////////////////////////////////  //
		function setSkin(skin){

			$('.loader').attr('class', 'loader '+ skin);
			$('#loading h6').hasClass('loaded') ? $('#loading h6').attr('class', 'loaded ' + skin) : $('#loading h6').attr('class', skin);

		}

		//////////////////////////////////////////////////////  //
		// Finish
		//////////////////////////////////////////////////////  //
		function completeLoad () {

			progress.animate({
				width: "100%"
				}, 100, function() {

					$('#loading h6').text('Complete!').addClass('loaded');
					percent.text('100%');
					clearInterval(calcPercent);

				}
			);

			$('#data .loading').delay(300).animate({
				opacity: 0
				}, 1000, function() {

					$('#data .loading').addClass('animated fadeOut noopacity nodisplay');

				}
			);

			loading.delay(300).animate({
				opacity: 0,
				height: 0
				}, 1000, function() {

					$('#loading').attr('class', 'animated fadeOut noopacity nodisplay');

				}
			);

			$('#legend, #data-attribution').delay(300).animate({
				opacity: 100
				}, 1000, function() {

					$('#legend, #data-attribution').removeClass('noopacity nodisplay').addClass('animated fadeIn');
					$('#data .modal-header .competitor').removeClass('noopacity nodisplay').addClass('animated fadeIn');
					$('#gotoInventory').removeClass('noopacity nodisplay').addClass('animated fadeIn');

				}
			);

		}

		$(document).queue('competitors', function(){

			completeLoad();
			clearTimeout(timeoutID);

		});

		$(document).dequeue('competitors');

	});*/

        $( "#data" ).on('shown.bs.modal', function(){

		//////////////////////////////////////////////////////  //
		// Set loader color
		//////////////////////////////////////////////////////  //
		var color = "gray";

		setSkin(color);

		//////////////////////////////////////////////////////  //
		// Set competitor array
		//////////////////////////////////////////////////////  //
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

		var calcPercent;
		var timeoutID;

		var loading = $('#loading');
		var progress = $('#loading .progress-bar');
		var percent = $('#loading .percentage');

		//////////////////////////////////////////////////////  //
		// Call function to load array of competitors
		//////////////////////////////////////////////////////  //
		preload(competitors);

		//////////////////////////////////////////////////////  //
		// Loading
		//////////////////////////////////////////////////////  //
		function preload( competitors ) {

		  var increment = Math.floor(100 / competitors.length);

		  $(competitors).each( function( index ) {

			  var competitor = this;
			  var progressWidth = increment * (index + 1);

			  $(document).queue('competitors', setWidth(progressWidth));

		  });

		}

		//////////////////////////////////////////////////////  //
		// Set width
		//////////////////////////////////////////////////////  //
		function setWidth( progressWidth ) {

			return function(next){
				doWidth(progressWidth, next);
			}

		}

		//////////////////////////////////////////////////////  //
		// Make width adjustment
		//////////////////////////////////////////////////////  //
		function doWidth( progressWidth, next ) {

			var minTime = 100;
			var maxTime = 200;
			var time = Math.floor(Math.random()*(maxTime-minTime+1)+maxTime);

			//////////////////////////////////////////////////////  //
			// Time the width adjustments
			//////////////////////////////////////////////////////  //
			timeoutID = setTimeout( function(){

				progress.animate({

					//////////////////////////////////////////////////////  //
					// Change width. Correct for 10% progress number
					// being hidden
					//////////////////////////////////////////////////////  //
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

				//////////////////////////////////////////////////////  //
				// Loop through the items
				//////////////////////////////////////////////////////  //
				next();

			}, time )

		}

		//////////////////////////////////////////////////////  //
		// Set skin
		//////////////////////////////////////////////////////  //
		function setSkin(skin){

			$('.loader').attr('class', 'loader '+ skin);
			$('#loading h6').hasClass('loaded') ? $('#loading h6').attr('class', 'loaded ' + skin) : $('#loading h6').attr('class', skin);

		}

		//////////////////////////////////////////////////////  //
		// Finish
		//////////////////////////////////////////////////////  //
		function completeLoad () {

			progress.animate({
				width: "100%"
				}, 100, function() {

					$('#loading h6').text('Complete!').addClass('loaded');
					percent.text('100%');
					clearInterval(calcPercent);

				}
			);

			$('#data .loading').delay(300).animate({
				opacity: 0
				}, 1000, function() {

					$('#data .loading').addClass('animated fadeOut noopacity nodisplay');

				}
			);

			loading.delay(300).animate({
				opacity: 0,
				height: 0
				}, 1000, function() {

					$('#loading').attr('class', 'animated fadeOut noopacity nodisplay');

				}
			);

			$('#legend, #data-attribution').delay(300).animate({
				opacity: 100
				}, 1000, function() {

					$('#legend, #data-attribution').removeClass('noopacity nodisplay').addClass('animated fadeIn');
					$('#data .modal-header .competitor').removeClass('noopacity nodisplay').addClass('animated fadeIn');
					$('#gotoInventory').removeClass('noopacity nodisplay').addClass('animated fadeIn');

				}
			);

		}
                
                //Wait until the GeoRanker data is ready
                    var holdOn = window.setInterval(function(){

                        var geoRankerDone = document.getElementById("georankerdone").value;
                        if(geoRankerDone === "1")
                        {
                            //Clear the interval and load the competitors
                            window.clearInterval(holdOn);

                            var projectID = document.getElementById('projectid').value;

                            getGeoRankerCompetitors(projectID, function(result){
                                document.getElementById('competitorsListAll').innerHTML = result;
                                
                                //Suppress the progress bar and show the competitors box
                                document.getElementById("loadingDiv").style.display = "none";

                                document.getElementById("googleHead").style.display = "block";
                                document.getElementById("competitorForm").style.display = "block";
                                document.getElementById("initiateButton").style.display = "block";

                                
                            });
                        }
                        else
                        {
                            //Do nothing
                        }
                    },2500);

		$(document).queue('competitors', function(){
                    completeLoad();
                    clearTimeout(timeoutID);
                });

		$(document).dequeue('competitors');

	});

        
        
	//////////////////////////////////////////////////////  //
	//    HEADER + MODAL ANIMATIONS				            //
	//////////////////////////////////////////////////////  //
	//    IS HOMEPAGE DATA ENTERED?      		            //
	//////////////////////////////////////////////////////  //
	$('#keyword').focusout(function() {

		if ($(this).val() != "" && $('#location').val() != "") {
			//$('#get-started').removeClass('no-modal');
		} else {
			//$('#get-started').addClass('no-modal');
		}
	});

	$('#location').focusout(function() {

		if ($(this).val() != "" && $('#keyword').val() != "") {
			//$('#get-started').removeClass('no-modal');
		} else {
			//$('#get-started').addClass('no-modal');
		}
	});

	//////////////////////////////////////////////////////  //
	// SHOW MODAL
	//////////////////////////////////////////////////////  //
	$('#data.modal').on('show.bs.modal', function (e) {

		var button = e.relatedTarget;

		//if($('#data').hasClass('no-modal')) {
			//console.log("here");
			//e.stopPropegation();
			//$('intro-form').validator('validate');

		//} else {

			$('.blurable').addClass('blur');

			$('#crt-output').removeClass('output');
			$('#crt-glitch').removeClass('glitch');

			$('.modal.fadeable')
				.removeClass('animated fadeOut')
				.addClass('animated fadeIn');

			$('.header-centered.fadeable')
				.removeClass('animated fadeIn')
				.addClass('animated fadeOut');

		//}

	});

	//////////////////////////////////////////////////////  //
	// HIDE MODAL
	//////////////////////////////////////////////////////  //
	$('#data.modal').on('hide.bs.modal', function () {

		$('.modal.fadeable')
			.removeClass('animated fadeIn')
			.addClass('animated fadeOut');

		$('.header-centered.fadeable')
			.removeClass('animated fadeOut')
			.addClass('animated fadeIn');

		$('.blurable').removeClass('blur');

		$('#crt-output').addClass('output');
		$('#crt-glitch').addClass('glitch');

	});

	//////////////////////////////////////////////////////  //
	//    DYNAMIC MODAL CONTENT                             //
	//////////////////////////////////////////////////////  //
    $(function() {

		//////////////////////////////////////////////////////  //
		//    CLEAR TIMEOUTS	  		            		    //
		//////////////////////////////////////////////////////  //
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

		//////////////////////////////////////////////////////  //
		//    REGISTRATION  & LOGIN MODAL		  		        //
		//////////////////////////////////////////////////////  //
		var login = $("#login");
		var remind = $("#remind");
		var register = $("#register");
		var email = $("#email");
		var gotoRegister = $(".gotoRegister");
		var gotoLogin = $(".gotoLogin");
		var gotoRemind = $(".gotoRemind");
		var gotoEmailReport = $("#gotoEmailReport");

		//////////////////////////////////////////////////////  //
		//    REGISTER			  		            		    //
		//////////////////////////////////////////////////////  //
		$(gotoRegister).on("click", function() {

			$(document)

				.queue('register', function(next) {

					$(email).addClass("noopacity");
					$(".email").addClass("noopacity");
					$(login).addClass("noopacity");
					$(remind).addClass("noopacity");
					$(".remind").addClass("noopacity");
					clearMe1 = setTimeout(next, 300); // delay
					//console.log("step 2");
				})

				.queue('register', function(next) {

					$(email).addClass("nodisplay");
					$(".email").addClass("nodisplay");
					$(login).addClass("nodisplay");
					$(remind).addClass("nodisplay");
					$(".remind").addClass("nodisplay");
					$(register).removeClass("nodisplay");
					$(".login-register").removeClass("nodisplay");
					$("p.gotoRegister").addClass("noopacity");
					clearMe2 = setTimeout(next, 300); // delay
					//console.log("step 3");

				})

				.queue('register', function(next) {

					$(register).removeClass("noopacity");
					$(".login-register").removeClass("noopacity");
					$("p.gotoRegister").addClass("nodisplay");
					$("p.gotoLogin").removeClass("nodisplay");
					clearMe3 = setTimeout(next, 300); // delay
					//console.log("step 4");
				})

				.queue('register', function(next) {

					$("p.gotoLogin").removeClass("noopacity");
					clearMe4 = setTimeout(next, 300); // delay
					//console.log("step 5");
				})

				.queue('register', function(){
					stopTimer();
					//console.log("step 6");
				})

				.dequeue('register');

		});

		//////////////////////////////////////////////////////  //
		//    LOGIN         	  		            		    //
		//////////////////////////////////////////////////////  //
		$(gotoLogin).on("click", function() {

			$(document)

				.queue('login', function(next) {

					$(email).addClass("noopacity");
					$(".email").addClass("noopacity");
					$(register).addClass("noopacity");
					$(remind).addClass("noopacity");
					$(".remind").addClass("noopacity");
					clearMe1 = setTimeout(next, 300); // delay

				})

				.queue('login', function(next) {

					$(email).addClass("nodisplay");
					$(".email").addClass("nodisplay");
					$(register).addClass("nodisplay");
					$(remind).addClass("nodisplay");
					$(".remind").addClass("nodisplay");
					$(login).removeClass("nodisplay");
					$(".login-register").removeClass("nodisplay");
					$("p.gotoLogin").addClass("noopacity");
					clearMe2 = setTimeout(next, 300); // delay

				})

				.queue('login', function(next) {

					$(login).removeClass("noopacity");
					$(".login-register").removeClass("noopacity");
					$("p.gotoLogin").addClass("nodisplay");
					$("p.gotoRegister").removeClass("nodisplay");
					clearMe3 = setTimeout(next, 300); // delay

				})

				.queue('login', function(next) {

					$("p.gotoRegister").removeClass("noopacity");
					clearMe4 = setTimeout(next, 300); // delay

				})

				.queue('login', function(){
					stopTimer();
				})

				.dequeue('login');

		});

		//////////////////////////////////////////////////////  //
		//    REMIND         	  		            		    //
		//////////////////////////////////////////////////////  //
		$(gotoRemind).on("click", function() {

			$(document)

				.queue('remind', function(next) {

					$(email).addClass("noopacity");
					$(".email").addClass("noopacity");
					$(register).addClass("noopacity");
					$(login).addClass("noopacity");
					$(".login-register").addClass("noopacity");
					clearMe1 = setTimeout(next, 300); // delay

				})

				.queue('remind', function(next) {

					$(email).addClass("nodisplay");
					$(".email").addClass("nodisplay");
					$(register).addClass("nodisplay");
					$(login).addClass("nodisplay");
					$(".login-register").addClass("nodisplay");
					$("p.gotoLogin").addClass("noopacity");
					$(remind).removeClass("nodisplay");
					$(".remind").removeClass("nodisplay");
					clearMe2 = setTimeout(next, 300); // delay

				})

				.queue('remind', function(next) {

					$("p.gotoLogin").addClass("nodisplay");
					$(remind).removeClass("noopacity");
					$(".remind").removeClass("noopacity");
					$("p.gotoRegister").removeClass("nodisplay");
					clearMe3 = setTimeout(next, 300); // delay

				})

				.queue('remind', function(next) {

					$("p.gotoRegister").removeClass("noopacity");
					clearMe4 = setTimeout(next, 300); // delay

				})

				.queue('remind', function(){
					stopTimer();
				})

				.dequeue('remind');

		});

		//////////////////////////////////////////////////////  //
		//    EMAIL         	  		            		    //
		//////////////////////////////////////////////////////  //
		$(gotoEmailReport).on("click", function() {

			$(document)

				.queue('email', function(next) {

					$(register).addClass("noopacity");
					$(login).addClass("noopacity");
					$(remind).addClass("noopacity");
					$(".remind").addClass("noopacity");
					$(".login-register").addClass("noopacity");
					clearMe1 = setTimeout(next, 300); // delay

				})

				.queue('email', function(next) {

					$(register).addClass("nodisplay");
					$(login).addClass("nodisplay");
					$(remind).addClass("nodisplay");
					$(".remind").addClass("nodisplay");
					$(".login-register").addClass("nodisplay");
					$("p.gotoLogin").addClass("noopacity");
					$(email).removeClass("nodisplay");
					$(".email").removeClass("nodisplay");
					clearMe2 = setTimeout(next, 300); // delay

				})

				.queue('email', function(next) {

					$("p.gotoLogin").addClass("nodisplay");
					$(email).removeClass("noopacity");
					$(".email").removeClass("noopacity");
					$("p.gotoRegister").removeClass("nodisplay");
					clearMe3 = setTimeout(next, 300); // delay

				})

				.queue('email', function(next) {

					$("p.gotoRegister").removeClass("noopacity");
					clearMe4 = setTimeout(next, 300); // delay

				})

				.queue('email', function(){
					stopTimer();
				})

				.dequeue('email');

		});

		//////////////////////////////////////////////////////  //
		//    COMPETITOR         	  		            		//
		//////////////////////////////////////////////////////  //
		var competitor = $("#competitor");
		var gotoCompetitor = $("#gotoCompetitor");
		var inventory = $("#inventory");
		var user = $("#user");

		$(gotoCompetitor).on("click", function() {
                    
                    	$(document)
				.queue('competitor', function(next) {

					$(user).addClass("animated fadeOut");
					$(inventory).addClass("animated fadeOut");
					clearMe1 = setTimeout(next, 300); // delay

				})

				.queue('competitor', function(next) {

					$(user).addClass("noopacity nodisplay");
					$(inventory).addClass("noopacity nodisplay");
					clearMe2 = setTimeout(next, 300); // delay

				})

				.queue('competitor', function(next) {

					$(competitor).addClass("animated fadeIn");
					clearMe3 = setTimeout(next, 300); // delay

				})

				.queue('competitor', function(next) {

					$(competitor).removeClass("noopacity nodisplay");
					clearMe4 = setTimeout(next, 300); // delay

				})

				.queue('competitor', function(){
					stopTimer();
				})

				.dequeue('competitor');

		});

		//////////////////////////////////////////////////////  //
		//    INVENTORY         	  		            		//
		//////////////////////////////////////////////////////  //
		var inventory = $("#inventory");
		var gotoInventory = $("#gotoInventory");
		var user = $("#user");
		var competitor = $(".competitor");
		var competitorAnalyzer = $("#competitor-analyzer");

		$(gotoInventory).on("click", function() {
                    
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
                                //Wait until the Ahrefs data is ready
                                var holdOn2 = window.setInterval(function(){

                                    var ahrefsDone = document.getElementById("ahrefsdone").value;
                                    if(ahrefsDone === "1")
                                    {
                                        //Clear the interval and load the competitors
                                        window.clearInterval(holdOn2);

                                        //var projectID = document.getElementById('projectid').value;

                                        runAhrefsAnalysis(function(result){

                                            var resultData = result.split("|");

                                            //Set the inventory count stuff
                                            //////////////////////////////////////////////////////  //
                                            //    COUNTUP			  		            		    //
                                            //////////////////////////////////////////////////////  //
                                            var options = {
                                                    useEasing : true,
                                                    useGrouping : true,
                                                    separator : ',',
                                                    decimal : '.',
                                                    prefix : '',
                                                    suffix : ''
                                            };

                                            //alert("setting funcs");

                                            var inventoryCount01 = new countUp("inventory-count01", Math.round(resultData[0]*0.5), resultData[0], 0, 3, options);
                                            var inventoryCount02 = new countUp("inventory-count02", Math.round(resultData[1]*0.5), resultData[1], 0, 3, options);
                                            var inventoryCount03 = new countUp("inventory-count03", Math.round(resultData[2]*0.5), resultData[2], 0, 3, options);

                                            //alert("displaying divs");
                                            //Show the analyzing spinner and suppress the inventory box
                                            document.getElementById("analyzingDiv").style.display = "none";

                                            document.getElementById("inventory").style.display = "block";
                                            document.getElementById("inventoryData").style.display = "block";
                                            document.getElementById("user").style.display = "block";

                                            //alert("starting funcs");
                                            //inventoryCount01.start();
                                            //inventoryCount02.start();
                                            //inventoryCount03.start();
                                            //var count01 = new countUp("count01", -3259, -3289, 0, 3, options);
                                            //var count02 = new countUp("count02", -432, -486, 0, 3, options);
                                            //var count03 = new countUp("count03", -12, -6, 0, 3, options);

                                            $('#inventory-count01').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount01.start();} return false;});
                                            $('#inventory-count02').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount02.start();} return false;});
                                            $('#inventory-count03').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount03.start();} return false;});
                                            //$('#count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count01.start();} return false;});
                                            //$('#count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count02.start();} return false;});
                                            //$('#count03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count03.start();} return false;});


                                        });
                                    }
                                    else
                                    {
                                        //Do nothing
                                    }
                                },2500);
                                
                                clearMe3 = setTimeout(next, 1000); // delay
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

		//////////////////////////////////////////////////////  //
		//    COMPARISON         	  		            		//
		//////////////////////////////////////////////////////  //
		var comparison = $("#comparison");
		var showComparison = $(".showComparison");
		var gotoComparison = $("#gotoComparison");
		var userAnalyzer = $("#user-analyzer");

		$(gotoComparison).on("click", function() {

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
                                        
                                        //Wait until the Ahrefs data is ready
                                        var holdOn3 = window.setInterval(function(){

                                            var userAhrefsDone = document.getElementById("userahrefsdone").value;
                                            
                                            var inventoryCount01 = document.getElementById('inventory-count01').innerHTML;
                                            var inventoryCount02 = document.getElementById('inventory-count02').innerHTML;
                                            var inventoryCount03 = document.getElementById('inventory-count03').innerHTML;
                                            
                                            if(userAhrefsDone === "1")
                                            {
                                                //Clear the interval and load the competitors
                                                window.clearInterval(holdOn3);

                                                //var projectID = document.getElementById('projectid').value;

                                                runUserAhrefsAnalysis(function(countResults,weeklyResults,monthlyResults,annualResults){

                                                var resultData = countResults.split("|");
                                                var weeklyData = weeklyResults.split("|");
                                                var monthlyData = monthlyResults.split("|");
                                                var annualData = annualResults.split("|");

                                                //Set the chart data
                                                /*document.getElementById('annualdata').value = annualData;
                                                document.getElementById('monthlydata').value = monthlyData;
                                                document.getElementById('weeklydata').value = weeklyData;*/
                                                //drawCharts();
                                                
                                                //Now let's draw the charts
                                                drawCharts(annualData, monthlyData, weeklyData);

                                                    //Set the inventory count stuff
                                                    //////////////////////////////////////////////////////  //
                                                    //    COUNTUP			  		            		    //
                                                    //////////////////////////////////////////////////////  //
                                                    var options = {
                                                            useEasing : true,
                                                            useGrouping : true,
                                                            separator : ',',
                                                            decimal : '.',
                                                            prefix : '',
                                                            suffix : ''
                                                    };

                                                    //alert("setting funcs");

                                                    //var inventoryCount01 = new countUp("inventory-count01", Math.round(resultData[0]*0.5), resultData[0], 0, 3, options);
                                                    //var inventoryCount02 = new countUp("inventory-count02", Math.round(resultData[1]*0.5), resultData[1], 0, 3, options);
                                                    //var inventoryCount03 = new countUp("inventory-count03", Math.round(resultData[2]*0.5), resultData[2], 0, 3, options);

                                                    var count01 = new countUp("count01", Math.round(resultData[0]*0.5), resultData[0]-inventoryCount01, 0, 3, options);
                                                    var count02 = new countUp("count02", Math.round(resultData[1]*0.5), resultData[1]-inventoryCount02, 0, 3, options);
                                                    var count03 = new countUp("count03", Math.round(resultData[2]*0.5), resultData[2]-inventoryCount03, 0, 3, options);

                                                    //alert("displaying divs");
                                                    
                                                    
                                                    //alert("starting funcs");
                                                    //inventoryCount01.start();
                                                    //inventoryCount02.start();
                                                    //inventoryCount03.start();
                                                    //var count01 = new countUp("count01", -3259, -3289, 0, 3, options);
                                                    //var count02 = new countUp("count02", -432, -486, 0, 3, options);
                                                    //var count03 = new countUp("count03", -12, -6, 0, 3, options);

                                                    //$('#inventory-count01').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount01.start();} return false;});
                                                    //$('#inventory-count02').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount02.start();} return false;});
                                                    //$('#inventory-count03').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount03.start();} return false;});
                                                    $('#count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count01.start();} return false;});
                                                    $('#count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count02.start();} return false;});
                                                    $('#count03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count03.start();} return false;});

                                                    //Show the charts and suppress the analyzing spinner
                                                    document.getElementById('user-analyzer').style.display = "none";
                                                    document.getElementById('comparison').style.display = "block";
                                                });
                                            }
                                            else
                                            {
                                                //Do nothing
                                            }
                                        },2500);
                                
					clearMe3 = setTimeout(next, 1000); // delay

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
					  //console.log("comparison queue is done");
				 })

				.dequeue('comparison');

		});

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
