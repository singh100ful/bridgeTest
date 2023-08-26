//
//  AppTracking.m
//  bridgeTest
//
//  Created by Ankit Singh on 26/08/23.
//

#import <React/RCTBridgeModule.h>
#import <AppTrackingTransparency/AppTrackingTransparency.h>

@interface RCT_EXTERN_MODULE(AppTracking, NSObject)

RCT_EXTERN_METHOD(requestPermission:(RCTResponseSenderBlock)callback)

@end

@implementation AppTracking

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(requestPermission:(RCTResponseSenderBlock)callback) {
    dispatch_async(dispatch_get_main_queue(), ^{
        [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {
            callback(@[@(status)]);
        }];
    });
}

@end

