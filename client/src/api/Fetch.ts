import omitEmpty from 'omit-empty'
export interface HttpResponse<T> extends Response {
    parsedBody?: T;
}
export async function fetchJson<T>(
    request: RequestInfo, options: any
): Promise<HttpResponse<T>> {
    options = {
        // your default options
        credentials: 'same-origin',
        redirect: 'error',
        ...options,
    };

    if(options.queryParams) {
        request += (request.toString().indexOf('?') === -1 ? '?' : '&') + queryParams(omitEmpty(options.queryParams));
        delete options.queryParams;
    }
    const response: HttpResponse<T> = await fetch(
        request, options
    );
    response.parsedBody = await response.json();
    return response;
}

function queryParams(params: any) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}
