#version 460
#extension GL_EXT_ray_tracing:enable

layout(location=0)rayPayloadEXT vec3 payload;
layout(set=0,binding=0)uniform accelerationStructureEXT topLevelAS;
layout(std140,set=0,binding=1)buffer PixelBuffer{vec4 pixels[];}
pixelBuffer;

vec3 calcRayDirection(const vec2 pixel){
    const float aspectRatio=gl_LaunchSizeEXT.x/gl_LaunchSizeEXT.y;
    const vec2 imagePlaneSize=
    vec2(aspectRatio*2.,2.);// vertical fov: 45'
    vec2 ixy=(vec2(-.5,-.5)+pixel/gl_LaunchSizeEXT.xy)*imagePlaneSize;
    return normalize(vec3(ixy.x,-ixy.y,1.));
}

void main(){
    const vec3 rayOrigin={0,0,-1};
    const vec3 rayDirection=calcRayDirection(vec2(gl_LaunchIDEXT));
    const float rayTmin=1e-3;
    const float rayTmax=1e5;
    
    payload=vec3(0.);
    traceRayEXT(topLevelAS,gl_RayFlagsOpaqueEXT,0xFF,0,1,0,rayOrigin,
    rayTmin,rayDirection,rayTmax,0);
    
    const uint pixelIndex=uint(gl_LaunchIDEXT.y)*uint(gl_LaunchSizeEXT.x)+
    uint(gl_LaunchIDEXT.x);
    pixelBuffer.pixels[pixelIndex]=vec4(payload,1.);
}