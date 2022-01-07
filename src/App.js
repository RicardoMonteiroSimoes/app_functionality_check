import './App.css';


import functionalityData from './data/functionality_matrix.json';

import React from 'react';
import { useState, useEffect } from 'react';
import OsViewer from './components/osViewer/osViewer.component';
import FunctionalityTable from './components/functionalityTable/functionalityTable.component';

function App() {

  const [osData, setOsData] = useState(null);
  const [osIndex, setOsIndex] = useState(null);

  useEffect(() => {
    getOsData();
  }, []);

  const getOsData = () => {

    console.log(navigator.userAgentData)

    var userOS;    // will either be iOS, Android or unknown
    var userOSver; // this is a string, use Number(userOSver) to convert
    var ua = navigator.userAgent;
    var uaindex;

    // determine OS
    if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
      userOS = 'iOS';
      uaindex = ua.indexOf('OS ');
    }
    else if (ua.match(/Android/i)) {
      userOS = 'Android';
      uaindex = ua.indexOf('Android ');
    }
    else {
      userOS = 'unknown';
    }

    // determine version
    if (userOS === 'iOS' && uaindex > -1) {
      userOSver = ua.substr(uaindex + 3, 3).replace('_', '.');
    }
    else if (userOS === 'Android' && uaindex > -1) {
      userOSver = ua.substr(uaindex + 8, 3);
    }
    else {
      userOSver = 'unknown';
    }
    setOsData({ "os": userOS, "version": Number(userOSver) })

  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (osData == null) {
        setOsData({ "error": "Couldn't determine OS and Version" })
      }
    }, 7000)

    return () => clearTimeout(timeout)

  }, [osData])

  useEffect(() => {
    if (!!osData) {
      if (osData.os === "Android") {
        setOsIndex(functionalityData.functionMatrix.devices.findIndex(device => device.OS === "Android"));
      } else if (osData.os === "iOS") {
        var comparisonArray = [];
        functionalityData.functionMatrix.devices.forEach(item => item.OS === "iOS" ? comparisonArray.push(item) : null);
        comparisonArray.forEach(item => {
          if (!!item.comparison) {
            if (item.comparison === "<" && osData.version < Number(item.version)) {
              setOsIndex((functionalityData.functionMatrix.devices.findIndex(device => device.OS === "iOS" && device.version === item.version)));
            } else if (item.comparison === ">=" && osData.version >= Number(item.version)) {
              setOsIndex((functionalityData.functionMatrix.devices.findIndex(device => device.OS === "iOS" && device.version === item.version)));
            } else if (osData.version === Number(item.version)) {
              setOsIndex((functionalityData.functionMatrix.devices.findIndex(device => device.OS === "iOS" && device.version === item.version)));
            }
          }
        });
      }
    }
    console.log('Set highlight index to ')
    console.log(osIndex)
    console.log(osData)
  }, [osData])


  return (
    <>
      <OsViewer osData={osData} setOsData={setOsData} />
      <FunctionalityTable functionalityData={functionalityData} osData={osData} highlightIndex={osIndex} />
      <b>Keys:</b>
      <ul>
        <li>✅: Full functionality avaliable</li>
        <li>❗: Limited functionality, check tooltip for more information</li>
        <li>❌: Function not avaliable on given device</li>
      </ul>
    </>
  );
}

export default App;
