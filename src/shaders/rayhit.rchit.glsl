#version 460
#extension GL_EXT_ray_tracing:enable

layout(location=0)rayPayloadInEXT vec3 payload;
hitAttributeEXT vec2 barycentricCoord;

void main(){
    //  payload = vec3(1.0 - barycentricCoord.x - barycentricCoord.y, barycentricCoord.x, barycentricCoord.y);
    payload=vec3(barycentricCoord.x,barycentricCoord.y,1.-barycentricCoord.x-barycentricCoord.y);
}