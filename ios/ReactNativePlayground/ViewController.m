//
//  ViewController.m
//  ReactNativePlayground
//
//  Created by 计轶轩 on 2017/5/28.
//  Copyright © 2017年 iamjiyixuan. All rights reserved.
//

#import "ViewController.h"
// 3rd
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridgeModule.h>

@interface ViewController () <RCTBridgeModule>

@property(nonatomic, strong) RCTRootView *rootView;

@end

@implementation ViewController

RCT_EXPORT_MODULE();

- (void)viewDidLoad
{
    [super viewDidLoad];

    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"src/index" fallbackResource:nil];
    //    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    NSDictionary *props = @{ @"ttext" : @"text from iOS" };
    self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                moduleName:@"ReactNativePlayground"
                                         initialProperties:props
                                             launchOptions:nil];
    self.rootView.frame = [UIScreen mainScreen].bounds;
    [self.view addSubview:self.rootView];
    
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(5 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        NSDictionary *props = @{ @"ttext" : @"text from iOS 2" };
        self.rootView.appProperties = props;
    });
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(onClickButton:(NSString *)data)
{
    NSLog(@"");
    [self test:data];
    
//    NSDictionary *props = @{ @"ttext" : @"text from iOS 3" };
//    self.rootView.appProperties = props;
}

- (void)test:(NSString *)text
{
    NSLog(@"");
    
    UIAlertController* alert = [UIAlertController alertControllerWithTitle:@"My Alert"
                                                                   message:@"This is an alert."
                                                            preferredStyle:UIAlertControllerStyleAlert];
    
    UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                                          handler:^(UIAlertAction * action) {}];
    
    [alert addAction:defaultAction];
    [self presentViewController:alert animated:YES completion:nil];
}

@end
