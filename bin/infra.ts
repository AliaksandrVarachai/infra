#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DeployFrontendShopStack } from '../lib/deploy-frontend-shop-stack';

const app = new cdk.App();
new DeployFrontendShopStack(app, 'DeployFrontendShopStack', {});