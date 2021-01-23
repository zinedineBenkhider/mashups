
const tenantUri = 'https://u85p0op11utybuc.eu.qlikcloud.com';
const tenant = 'u85p0op11utybuc.eu.qlikcloud.com';
const webIntegrationId = '';
const tenantName = "MPBIDIM";
const theme = 'theme_mpbidim';
const appId = ''; //
const appName = "tutorial1"; //
const homeSheet = "b2786d63-c1f9-4c03-a146-7395ea037c17"; //
var iframSrc = tenantUri + "/single/?appid=" + appId + "&theme=" + theme + "&opt=ctxmenu" + "&sheet=";

(async () => {
    document.title = appName + " | " + tenantName;
    async function request(path, returnJson = true) {
        const res = await fetch(`${tenantUri}${path}`, {
            mode: 'cors',
            credentials: 'include',
            redirect: 'follow',
            headers: {
                // web integration is sent as a header:
                'qlik-web-integration-id': webIntegrationId,
            },
        });
        if (res.status < 200 || res.status >= 400) throw res;
        return returnJson ? res.json() : res;
    }

    try {
        // call your-tenant.us.qlikcloud.com/api/v1/users/me to
        // retrieve the user metadata, as a way to detect if they
        // are signed in. An error will be thrown if the response
        // is a non-2XX HTTP status:
        const user = await request('/api/v1/users/me');
        document.body.style.display = 'block';
        // document.getElementById('intro').innerHTML = `Hello, ${user.name}`;
    } catch (err) {
        const returnTo = encodeURIComponent(window.location.href);
        // redirect your user to the tenant log in screen, and once they're
        // signed in, return to your web app:
        window.location.href = `${tenantUri}/login?returnto=${returnTo}&qlik-web-integration-id=${webIntegrationId}`;
    }
})();
