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
    NSDictionary *props = @{ @"ttext" : @{@"name" : @"计轶轩"} };
    self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                moduleName:@"ReactNativePlayground"
                                         initialProperties:props
                                             launchOptions:nil];
    self.rootView.frame = [UIScreen mainScreen].bounds;
    [self.view addSubview:self.rootView];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

RCT_EXPORT_METHOD(onClickButton:(NSString *)data)
{
    NSLog(@"");
}

@end
