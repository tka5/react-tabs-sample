import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProfileForm from "./ProfileForm";
import EmailForm from "./EmailForm";
import PasswordForm from "./PasswordForm";
import { IconContext } from "./IconContextProvider";
import IconForm from "./IconForm";

function SampleTab() {
  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab>プロフィール情報</Tab>
        <Tab>メールアドレス</Tab>
        <Tab>パスワード</Tab>
        <Tab>アイコン画像</Tab>
      </TabList>

      <TabPanel>
        <ProfileForm />
      </TabPanel>

      <TabPanel>
        <EmailForm />
      </TabPanel>
      
      <TabPanel>
        <PasswordForm />
      </TabPanel>

      <TabPanel>
        <IconForm />
      </TabPanel>
    </Tabs>
  );
}

export default SampleTab;
