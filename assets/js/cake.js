// DCP Click
document.addEventListener('DOMContentLoaded', () => {
    const cookieDomain = 'alchemyworx.cakeengine.net';
    const siteDomain = '.laurageller.online';
    
   (function ()  {
        var c = { 'name': 'cp', 'args': {'sess_timeout':'','gclid_param':'gclid','gclid_chk_ref':0,'bingkw_param':'ckm_kw','sc_param':'ckmsc','bingkw_chk_ref':0, 'attr_param':'ckmscn', 'attr_chk_ref': 0, 'sess_param': '', 'sess_chk_ref': 0, 'crtv_id': null, 'crtv_param':'ckmc', 'crtv_chk_ref': 0, 'tpcrid_param': 'ckmcrn', 'cookie_dom': cookieDomain, 'site_dom': siteDomain, 'ref_type': 1, 'ckm_sess_param': null ,'s1_param':'s1','s2_param':'s2','s3_param':'s3','s4_param':'s4','s5_param':'s5', 'sub_chk_ref':0} };
        var params = new URLSearchParams(window.location.search);
        var thirdPartyID = params.get('ckmscn');
        var creativeID = params.get('ckmc');
         var activeTracking = params.get('ckmat');
        if (thirdPartyID || creativeID || activeTracking)
            if (typeof CKMLib == 'object')
                    CKMLib.run(c);
        else {
            (_ckm = window._ckm || []).push(c);
            if (typeof CKMLib != 'string') {
                CKMLib = 'loading';
                var pix = document.createElement('script');
                pix.type = 'text/javascript'; pix.async = true;
                pix.src = '//cakecdn.com/jssdk/lib.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(pix, s);
            }
        }
    })();
 });