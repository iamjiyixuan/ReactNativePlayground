//
//  ViewController.m
//  ReactNativePlayground
//
//  Created by 计轶轩 on 2017/5/28.
//  Copyright © 2017年 iamjiyixuan. All rights reserved.
//

#import "ViewController.h"
#import "TestViewController.h"
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

    //    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"src/index" fallbackResource:nil];
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.79:8081/src/index.bundle?platform=ios"];
    NSDictionary *props = @{ @"ttext" : @"text from iOS" };
    self.rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                moduleName:@"ReactNativePlayground"
                                         initialProperties:props
                                             launchOptions:nil];
    self.rootView.frame = [UIScreen mainScreen].bounds;
    [self.view addSubview:self.rootView];

    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onXyz:) name:@"xyz" object:nil];
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

RCT_EXPORT_METHOD(onClickButton:(NSDictionary *)data)
{
    NSLog(@"%@", data);


    [[NSNotificationCenter defaultCenter] postNotificationName:@"xyz" object:data];
}



- (void)onXyz:(NSNotification *)notification
{
    NSDictionary *data = notification.object;
    NSString *name = [data valueForKey:@"name"];
    UIAlertController* alert = [UIAlertController alertControllerWithTitle:@"My Alert"
                                                                   message:name
                                                            preferredStyle:UIAlertControllerStyleAlert];
    
    UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                                          handler:^(UIAlertAction * action) {}];
    
    [alert addAction:defaultAction];
    [self presentViewController:alert animated:YES completion:nil];
}

@end
