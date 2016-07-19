$(function() {
	$("body").prepend('<div class="eskiz-ekran"></div>');
	//BAŞLIYORUZ ///////////////////////////////////////

	//Recently Blocked Members ///////////////////////////////////////
	$(document).on("mouseover", "html body:has(.groupJumpLayout:has(.groupsEditDescriptionArea ._4t38))", function() {
		var grupid = $("input[name='profile_id']").attr("value");
		$(this).find("._4-u2._3-96._4-u8:first:not(.oki)").addClass('oki ').prepend('<div class="sag-text son-engellenen"><a  href="/groups/' + grupid + '/blocked/?order=date"><b>Recently Blocked Members</b></a></div>');
		$(".UFIRow").find(".engel:not(:eq(0))").remove();
		$(this).find('.UFIRow:not(.hazir):not(.oki)').addClass("hazir").find('a.uiLinkSubtle').parent().prepend("<span class='yrm engel'><a href='#' rel='dialog-post' role='menuitem' tabindex='-1'><span><span> Block </span></span></a> - </span>");

	}); //Recently Blocked Members ///////////////////////////////////////	

	//YORUMDAN ENGELLEME ///////////////////////////////////////
	$(document).on("mouseover", "html body:has(.groupJumpLayout:has(.groupsEditDescriptionArea ._4t38)) .hazir.UFIRow:not(.oki)", function() {
		var grupid = $("input[name='profile_id']").attr("value");
		var kimo = $(this).find('a.UFIImageBlockImage').html();
		var cumle = $(this).find('a.UFIImageBlockImage').attr("data-hovercard");
		var ilk = "id=";
		var son = "&";
		var uyeid = cumle.match(ilk + "(.*)" + son)[1];

		$(this).find('a.uiLinkSubtle').parent().prepend("<span class='tam engel'><a href='/ajax/groups/members/remove.php?group_id=" + grupid + "&amp;uid=" + uyeid + "' rel='dialog-post' role='menuitem' tabindex='-1'><span><span> Block </span></span></a> - </span>");
		$(this).addClass("oki");
		$(this).find(".yrm.engel").remove();

	}); //YORUMDAN ENGELLEME ///////////////////////////////////////					   

	//BEGENİDEN ENGELLEME ///////////////////////////////////////

	$(document).on("mouseover", "html body:has(.groupJumpLayout:has(.groupsEditDescriptionArea ._4t38)) li.fbProfileBrowserListItem:not(.oki)", function() {
		var grupid = $("input[name='profile_id']").attr("value");
		var kimo = $(this).find('a.lfloat').html();
		var cumle = $(this).find('a.lfloat').attr("data-hovercard");
		var ilk = "id=";
		var son = "&";
		var uyeid = cumle.match(ilk + "(.*)" + son)[1]
		if ($(this).find('div._42ef').parent().find('span.tam_engel').length < 1) {
			$(this).find('div._42ef').parent().prepend("<div class='_6a rfloat _ohf'><div class='_6a _6b' style='height:50px'></div><div class='_6a _6b'><div class='_5t4x'><div><button class='_42ft _4jy0 FriendRequestAdd addButton _4jy3 _517h' type='button'><span class='tam_engel'><a href='/ajax/groups/members/remove.php?group_id=" + grupid + "&amp;uid=" + uyeid + "' rel='dialog-post' role='menuitem' tabindex='-1'><span><span>Block</span></span></a></span></button></div></div></div></div>");
			$(this).addClass("oki");
		}
	}); //BEGENİDEN ENGELLEME ///////////////////////////////////////				


	//MOUSEOVER SAKLA ///////////////////////////////////////
	$(document).on("mouseover", "html body:has(#pagelet_pending_queue)", function() {
		$('#pagelet_pending_queue .userContentWrapper').not(".kontrol").each(function(e) {
			var idm = "deneme";
			var grupid = $("input[name='profile_id']").attr("value");
			var kimo = $(this).find("a[data-hovercard]:first").attr('data-hovercard').replace("/ajax/hovercard/user.php?id=", "");
			//	$('<div rel="'+idm+'" class="conlist clear">deneme</div>').appendTo('#pagelet_pending_queue .userContentWrapper ._51xa._528a:first');
			$(this).find("._51xa._528a:first").prepend('<a data-hover="tooltip"  class="oto-onay _42ft _4jy0 _4jy3 _517h _51sy" class="oto-onay" href="#" ajaxify="/ajax/groups/mall/preapprove?group_id=' + grupid + '&amp;user_id=' + kimo + '" rel="async-post" role="button">Auto Approve</a>');
			//	$(this).find("._51xa._528a:first").prepend('<a class="oto-onay" href="#" ajaxify="/ajax/groups/mall/preapprove?group_id='+grupid+'&amp;user_id='+kimo+'" rel="async-post" role="button">Auto</a>');
			$(this).addClass("kontrol ");
		});
	}); //MOUSEOVER SAKLA ///////////////////////////////////////	 

	//KONTROL ///////////////////////////////////////
	$(document).on("mouseover", "html body:has(.groupJumpLayout:has(#pagelet_requests_queue))", function() {
		$('#pagelet_requests_queue ul.uiList li._2rcr').not(".kontrol").each(function(e) {
			var buhtml = $(this).text();
			var zaman = $(this).find(".clearfix._8u._42ef ul.uiList.mts._2rct._4kg li:nth-child(1)").text();
			var member = $(this).find(".clearfix._8u._42ef ul.uiList.mts._2rct._4kg li:nth-child(2)").text().replace(/[^0-9]/gi, '');
			var membersayi = parseInt(member);
			var aktif = $(this).find(".clearfix._8u._42ef .fsm.fwn.fcg a").length;

			if (zaman.indexOf(" 5 ") != -1 || zaman.indexOf(" day") != -1) {
				$(this).addClass("yeni");
			}

			if (membersayi > 40 && membersayi < 100) {
				$(this).addClass("member40");

			}
			if (membersayi > 99 && membersayi < 200) {
				$(this).addClass("member100");
			}
			if (membersayi > 199) {
				$(this).addClass("member200");
			}
			if (aktif == 0) {
				$(this).addClass("pasif");
			}

			$(this).addClass("kontrol ");

		});

	});
});