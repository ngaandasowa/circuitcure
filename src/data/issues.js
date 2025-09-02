export const issues = [
  { 
    id: 1, 
    title: 'Computer won’t turn on', 
    sub_description: 'Check power supply and cables.', 
    description: `
      Ensure that the power cable is securely plugged into both the wall outlet and the computer. 
      Check for any signs of damage on the cable and replace it if necessary. 
      Verify that the power supply switch (if present) is turned on. 
      If the issue persists, consider testing with a different power supply or seeking professional help.`
  },
  { 
    id: 2, 
    title: 'Screen is flickering', 
    sub_description: 'Try updating the graphics driver.', 
    description: `
      Flickering screens can be caused by outdated or corrupt graphics drivers. 
      Visit the manufacturer’s website to download and install the latest drivers for your graphics card. 
      Additionally, check the display settings and refresh rate to ensure they are correctly configured. 
      If updating drivers doesn't help, try connecting the computer to a different monitor to rule out hardware issues.`
  },
  { 
    id: 3, 
    title: 'Slow computer performance', 
    sub_description: 'Check for background processes and malware.', 
    description: `
      Open Task Manager (Ctrl + Shift + Esc) to see if any processes are consuming too much CPU or memory. 
      Close unnecessary applications and consider running a malware scan to check for any malicious software slowing down your system. 
      Additionally, check for available updates and consider upgrading your hardware (RAM, SSD) if the issue persists.`
  },
  { 
    id: 4, 
    title: 'No sound from speakers', 
    sub_description: 'Check sound settings and connections.', 
    description: `
      Ensure that the speakers are properly connected to the computer and powered on. 
      Check the sound settings in the operating system to make sure the correct playback device is selected. 
      Update or reinstall audio drivers if necessary. 
      You may also want to try connecting the speakers to another device to confirm they are working correctly.`
  },
  { 
    id: 5, 
    title: 'Overheating issues', 
    sub_description: 'Clean dust and check cooling system.', 
    description: `
      Overheating can cause the computer to shut down or throttle performance. 
      Clean the dust from vents and fans to improve airflow. 
      Make sure the cooling system (fans, heat sinks, etc.) is functioning properly and consider reapplying thermal paste on the CPU if needed. 
      Also, ensure the computer is placed in a well-ventilated area, and consider using a cooling pad for laptops.`
  },
  { 
    id: 6, 
    title: 'Blue Screen of Death (BSOD)', 
    sub_description: 'Analyze error code and check hardware.', 
    description: `
      BSODs can be caused by hardware failures, driver issues, or software conflicts. 
      Note the error code displayed on the blue screen and search for it online to find potential causes and solutions. 
      Check hardware components like RAM and hard drives for issues. 
      Running a memory diagnostic tool and checking for driver updates can help in identifying the problem.`
  },
  { 
    id: 7, 
    title: 'Internet connection problems', 
    sub_description: 'Restart router and check network settings.', 
    description: `
      If you’re unable to connect to the internet, restart your router and modem. 
      Ensure that the network settings on your computer are correctly configured. 
      Use the network troubleshooter in the operating system to diagnose and fix connection issues. 
      Also, check if other devices are facing the same issue to determine if it's a router or ISP problem.`
  },
  { 
    id: 8, 
    title: 'Keyboard or mouse not working', 
    sub_description: 'Check connections and update drivers.', 
    description: `
      Ensure that the keyboard or mouse is properly connected to the computer. 
      Try using a different USB port or replacing the batteries if it’s a wireless device. 
      Update or reinstall the device drivers to resolve any software conflicts. 
      If the device still doesn't work, test it on another computer to rule out hardware failure.`
  },
  { 
    id: 9, 
    title: 'Software crashes frequently', 
    sub_description: 'Update software and check for compatibility issues.', 
    description: `
      Frequent crashes can be caused by outdated software or compatibility issues with other applications. 
      Update the software to the latest version and check for any available patches. 
      Consider reinstalling the software if the issue persists. 
      Also, check the system requirements to ensure your computer is compatible with the software.`
  },
  { 
    id: 10, 
    title: 'Files are missing or corrupted', 
    sub_description: 'Run disk check and restore from backups.', 
    description: `
      If you notice missing or corrupted files, run a disk check utility to scan and fix errors on the hard drive. 
      Restore the missing files from backups if available. 
      Consider using data recovery software if the files are not recoverable from backups. 
      Regularly backing up important files can prevent data loss in the future.`
  },
  { 
    id: 11, 
    title: 'Printer not working', 
    sub_description: 'Check connections and update drivers.', 
    description: `
      Ensure the printer is properly connected to the computer and powered on. 
      Check for paper jams and low ink or toner levels. 
      Update or reinstall printer drivers and try printing a test page. 
      Also, verify that the correct printer is selected as the default in your operating system.`
  },
  { 
    id: 12, 
    title: 'USB device not recognized', 
    sub_description: 'Try a different port and update drivers.', 
    description: `
      If a USB device is not recognized, try plugging it into a different USB port. 
      Ensure the device is working by testing it on another computer. 
      Update or reinstall USB drivers to resolve any issues. 
      If the device still isn't recognized, check the manufacturer's website for specific troubleshooting steps.`
  },
  { 
    id: 13, 
    title: 'Unable to install software', 
    sub_description: 'Check system requirements and permissions.', 
    description: `
      Ensure your system meets the software’s minimum requirements. 
      Check for sufficient disk space and administrative permissions. 
      Temporarily disable antivirus software if it’s blocking the installation. 
      Also, verify that you're using the correct installation files (32-bit vs 64-bit) for your operating system.`
  },
  { 
    id: 14, 
    title: 'Computer is running hot', 
    sub_description: 'Ensure proper ventilation and clean fans.', 
    description: `
      Make sure your computer is placed in a well-ventilated area. 
      Clean the dust from fans and vents to improve airflow. 
      Consider using a cooling pad for laptops or adding additional case fans for desktops. 
      Monitoring the system's temperature using software can help you identify if there's an ongoing issue.`
  },
  { 
    id: 15, 
    title: 'Browser issues', 
    sub_description: 'Clear cache and cookies.', 
    description: `
      If your browser is slow or unresponsive, try clearing the cache and cookies. 
      Disable unnecessary extensions and update the browser to the latest version. 
      Resetting the browser settings to default can also help. 
      Additionally, check for any malware or unwanted software that could be affecting the browser's performance.`
  },
  { 
    id: 16, 
    title: 'Battery not charging', 
    sub_description: 'Check charger and battery health.', 
    description: `
      Ensure the charger is properly connected and the power outlet is working. 
      Check for any damage to the charger or charging port. 
      If the battery is removable, try reseating it. 
      Consider replacing the battery if it’s old or not holding a charge. 
      Additionally, calibrating the battery might help restore its full capacity.`
  },
  { 
    id: 17, 
    title: 'Wi-Fi signal is weak', 
    sub_description: 'Move closer to the router and avoid interference.', 
    description: `
      If your Wi-Fi signal is weak, try moving closer to the router. 
      Avoid physical obstructions and interference from other electronic devices. 
      Consider upgrading your router or using a Wi-Fi extender for better coverage. 
      Also, ensure your router firmware is up to date to improve signal strength.`
  },
  { 
    id: 18, 
    title: 'Application won’t open', 
    sub_description: 'Check for software updates and reinstall.', 
    description: `
      If an application won’t open, check for any available updates. 
      Reinstall the application to fix any corrupted files. 
      Ensure your operating system is up to date and compatible with the application. 
      You may also want to check the application logs for any error messages that could provide more insight.`
  },
  { 
    id: 19,
    title: "Computer Freezes Randomly",
    sub_description: "Check for software conflicts and hardware issues.",
    description: `
      <p>If your computer is freezing randomly, follow these steps to troubleshoot and resolve the issue:</p>
      <ol>
        <li><strong>Check for Software Conflicts:</strong>
          <ul>
            <li>Open Task Manager (Ctrl + Shift + Esc) to see if any programs are using excessive resources or causing conflicts.</li>
            <li>Disable or uninstall recently installed software that might be causing the issue.</li>
          </ul>
        </li>
        <li><strong>Run Hardware Diagnostics:</strong>
          <ul>
            <li>Use built-in or third-party diagnostic tools to test hardware components like RAM and hard drives for failures.</li>
            <li>Check the manufacturer's website for diagnostic tools specific to your hardware.</li>
          </ul>
        </li>
        <li><strong>Update Drivers and Operating System:</strong>
          <ul>
            <li>Ensure that all drivers, especially graphics and chipset drivers, are up to date.</li>
            <li>Check for and install any available updates for your operating system.</li>
          </ul>
        </li>
        <li><strong>Scan for Malware:</strong>
          <ul>
            <li>Run a full system scan using reliable antivirus software to check for malware that might be causing the freezes.</li>
          </ul>
        </li>
        <li><strong>Check System Resources:</strong>
          <ul>
            <li>Make sure your system has sufficient resources (CPU, memory, disk space) to run applications smoothly.</li>
            <li>Consider upgrading hardware if your system is underpowered for your needs.</li>
          </ul>
        </li>
        <li><strong>Monitor System Temperature:</strong>
          <ul>
            <li>Use software tools to monitor your system's temperature and check for overheating issues.</li>
            <li>Clean out dust from vents and fans to improve airflow and cooling.</li>
          </ul>
        </li>
      </ol>
      <p>By following these steps, you should be able to identify and address the causes of random computer freezes.</p>
    `, 
    videoUrl:'https://youtube.com//embed/J5BmgkWHrqg?si=N0QFyp43esLWf6a8'
  },
  { 
    id: 20,
    title: "External Monitor Not Detected",
    sub_description: "Check connections and display settings.",
    description: `
      <p>If your external monitor is not being detected, try these troubleshooting steps:</p>
      <ol>
        <li><strong>Verify Connections:</strong>
          <ul>
            <li>Ensure that the monitor is properly connected to the computer using the correct cable (HDMI, DisplayPort, VGA, etc.).</li>
            <li>Check that both the monitor and computer are powered on.</li>
          </ul>
        </li>
        <li><strong>Adjust Display Settings:</strong>
          <ul>
            <li>Go to Display Settings (right-click on the desktop and select "Display settings").</li>
            <li>Click on "Detect" to see if Windows can find the external monitor.</li>
          </ul>
        </li>
        <li><strong>Update Graphics Drivers:</strong>
          <ul>
            <li>Visit the manufacturer's website to download and install the latest graphics drivers for your GPU.</li>
          </ul>
        </li>
        <li><strong>Try a Different Cable or Port:</strong>
          <ul>
            <li>Test a different cable or use a different port on your computer to rule out issues with the current connection.</li>
          </ul>
        </li>
        <li><strong>Test with Another Device:</strong>
          <ul>
            <li>Connect the monitor to another computer or laptop to check if the monitor itself is working correctly.</li>
          </ul>
        </li>
        <li><strong>Check Monitor Settings:</strong>
          <ul>
            <li>Use the monitor's on-screen menu to ensure that the correct input source is selected.</li>
          </ul>
        </li>
      </ol>
      <p>These steps should help resolve issues with an external monitor not being detected.</p>
    `
  },
  { 
    id: 21,
    title: "HP Computer Stuck on 'Preparing Automatic Repair' (Windows 10)",
    sub_description: "Reinstallation of Windows 10 using a Bootable USB Drive",
    description: `
      <p>If your HP computer is stuck on the "Preparing Automatic Repair" screen and won't boot into Windows 10, this issue can often be resolved by reinstalling the operating system using a bootable USB flash drive. This problem is common on HP computers, particularly those with an Intel Core i5 7th Gen processor.</p>
      <p><strong>Steps to Resolve:</strong></p>
      <ol>
        <li><strong>Create a Bootable USB Drive:</strong> Use another working computer to create a bootable USB drive with the Windows 10 installation files. You can download the Windows 10 Media Creation Tool from Microsoft's website and follow the instructions to create the bootable USB.</li>
        <li><strong>Boot from USB:</strong> Insert the bootable USB drive into your HP computer and restart it. You may need to access the boot menu (usually by pressing F9, F12, or Esc during startup) to select the USB drive as the boot device.</li>
        <li><strong>Reinstall Windows 10:</strong> Follow the on-screen instructions to reinstall Windows 10. This process will involve selecting your language, time, and keyboard preferences, and then choosing "Install Now."</li>
        <li><strong>Select Custom Installation:</strong> Choose the "Custom" installation option, and select the partition where Windows is currently installed (usually Drive 0). This will format the drive and install a fresh copy of Windows 10.</li>
        <li><strong>Complete Installation:</strong> Once the installation is complete, your computer will restart and take you through the initial setup of Windows 10.</li>
        <li><strong>Thank You:</strong> After the reinstallation process, your computer should be able to boot into Windows 10 without any issues. You can now reinstall your applications and restore your files from a backup if necessary.</li>
      </ol>
      <p>This method has been successfully used to resolve issues with HP computers, specifically models with Intel Core i5 7th Gen processors, when stuck on the "Preparing Automatic Repair" screen.</p>
    `
  },
  { 
    id: 22,
    title: "Windows Update Stuck or Failing to Install",
    sub_description: "Run Windows Update Troubleshooter and clear update cache",
    description: `
      <p>If Windows Update is stuck or failing to install updates, follow these steps:</p>
      <ol>
        <li><strong>Run Windows Update Troubleshooter:</strong> Go to Settings > Update & Security > Troubleshoot, and run the Windows Update Troubleshooter. This tool can detect and fix common issues with Windows Update.</li>
        <li><strong>Clear Update Cache:</strong>
          <ul>
            <li>Stop the Windows Update service by running <code>net stop wuauserv</code> in Command Prompt as an administrator.</li>
            <li>Delete the contents of the <code>C:/Windows/SoftwareDistribution/Download</code> folder.</li>
            <li>Restart the Windows Update service by running <code>net start wuauserv</code>.</li>
          </ul>
        </li>
        <li><strong>Check Disk Space:</strong> Ensure you have enough disk space on your system drive for the update process.</li>
        <li><strong>Manually Install Updates:</strong> Download the specific update from the Microsoft Update Catalog and install it manually.</li>
        <li><strong>Check for Errors:</strong> Review error codes and Windows Update logs for more details on the issue.</li>
      </ol>
      <p>These steps should help resolve issues with Windows Update and ensure your system remains up to date.</p>
    `
  },
  { 
    id: 23,
    title: "Network Printer Connection Issues",
    sub_description: "Reconfigure printer settings and check network connections",
    description: `
      <p>If you're having trouble connecting to a network printer, follow these steps:</p>
      <ol>
        <li><strong>Verify Network Connection:</strong> Ensure that both your computer and the printer are on the same network. Check cables and Wi-Fi connections.</li>
        <li><strong>Reconfigure Printer Settings:</strong>
          <ul>
            <li>Go to Control Panel > Devices and Printers and select "Add a printer."</li>
            <li>Choose "Add a network, wireless, or Bluetooth printer" and follow the prompts.</li>
          </ul>
        </li>
        <li><strong>Update Printer Drivers:</strong> Download and install the latest drivers from the printer manufacturer's website.</li>
        <li><strong>Check Printer Status:</strong> Ensure the printer is powered on and free of errors.</li>
        <li><strong>Restart Devices:</strong> Restart your computer and printer to refresh network connections.</li>
      </ol>
      <p>These steps should help resolve most network printer connection issues.</p>
    `
  },
  { 
    id: 24,
    title: "System Clock Incorrect",
    sub_description: "Synchronize with internet time server and check BIOS settings",
    description: `
      <p>If your system clock is incorrect, follow these steps:</p>
      <ol>
        <li><strong>Synchronize with Internet Time Server:</strong>
          <ul>
            <li>Go to Settings > Time & Language > Date & Time.</li>
            <li>Enable "Set time automatically" and "Set time zone automatically."</li>
            <li>Click "Sync now" to update the clock with an internet time server.</li>
          </ul>
        </li>
        <li><strong>Check BIOS Settings:</strong>
          <ul>
            <li>Enter BIOS/UEFI settings during startup (usually by pressing F2, F10, or Del).</li>
            <li>Verify and correct the date and time settings.</li>
          </ul>
        </li>
        <li><strong>Replace CMOS Battery:</strong> If the clock is still incorrect, consider replacing the CMOS battery on the motherboard.</li>
        <li><strong>Check for System Updates:</strong> Ensure your operating system is up to date, as updates may include timekeeping fixes.</li>
      </ol>
      <p>These steps should help you correct the system clock.</p>
    `
  },
  { 
    id: 25,
    title: "Application Crashes on Startup",
    sub_description: "Check for updates and perform a clean reinstall",
    description: `
      <p>If an application crashes on startup, try these steps:</p>
      <ol>
        <li><strong>Check for Updates:</strong> Ensure both the application and your operating system are updated to the latest versions.</li>
        <li><strong>Perform a Clean Reinstall:</strong>
          <ul>
            <li>Uninstall the application from Control Panel > Programs and Features.</li>
            <li>Delete any leftover files or folders related to the application.</li>
            <li>Reinstall the application using the latest version.</li>
          </ul>
        </li>
        <li><strong>Check Compatibility:</strong> Verify that the application is compatible with your operating system version.</li>
        <li><strong>Review Error Logs:</strong> Look for error messages in Windows Event Viewer or application logs.</li>
        <li><strong>Disable Conflicting Software:</strong> Temporarily disable antivirus or firewall software that might be conflicting with the application.</li>
      </ol>
      <p>These steps should help resolve issues with applications crashing on startup.</p>
    `
  },
  { 
    id: 26,
    title: "Laptop Battery Draining Quickly",
    sub_description: "Optimize power settings and check battery health.",
    description: `
      <p>If your laptop battery is draining quickly, consider the following steps:</p>
      <ol>
        <li><strong>Optimize Power Settings:</strong>
          <ul>
            <li>Go to Settings > System > Power & sleep and adjust the power settings for better battery life.</li>
            <li>Select "Battery saver" mode to reduce background activity and screen brightness.</li>
          </ul>
        </li>
        <li><strong>Check Battery Health:</strong>
          <ul>
            <li>Use built-in diagnostic tools (such as Windows Battery Report) to check battery health.</li>
            <li>Replace the battery if it's degraded beyond acceptable limits.</li>
          </ul>
        </li>
        <li><strong>Manage Background Apps:</strong>
          <ul>
            <li>Go to Settings > Privacy > Background apps and disable apps that are not needed.</li>
          </ul>
        </li>
        <li><strong>Update Drivers and BIOS:</strong>
          <ul>
            <li>Ensure that all drivers and BIOS are up-to-date to fix any known issues with power management.</li>
          </ul>
        </li>
      </ol>
      <p>Implementing these tips can help extend your laptop's battery life.</p>
    `
  },
  { 
    id: 27,
    title: "Desktop Computer Overheating",
    sub_description: "Improve cooling and clean internal components.",
    description: `
      <p>If your desktop computer is overheating, follow these steps to address the issue:</p>
      <ol>
        <li><strong>Improve Cooling:</strong>
          <ul>
            <li>Ensure all fans are working properly and consider upgrading to more efficient cooling solutions.</li>
            <li>Apply fresh thermal paste between the CPU and heatsink to improve heat transfer.</li>
          </ul>
        </li>
        <li><strong>Clean Internal Components:</strong>
          <ul>
            <li>Open your computer case and clean dust from fans, vents, and other components using compressed air.</li>
          </ul>
        </li>
        <li><strong>Check Room Temperature:</strong>
          <ul>
            <li>Ensure that your computer is in a well-ventilated area and avoid placing it in direct sunlight or near heat sources.</li>
          </ul>
        </li>
        <li><strong>Monitor System Temperature:</strong>
          <ul>
            <li>Use software tools to monitor system temperature and check for any signs of overheating.</li>
          </ul>
        </li>
      </ol>
      <p>Following these steps will help prevent your desktop computer from overheating and ensure stable performance.</p>
    `
  },
  { 
    id: 28,
    title: "Windows 11 Upgrade Issues",
    sub_description: "Resolve common problems during upgrade.",
    description: `
      <p>If you're experiencing issues while upgrading to Windows 11, try these solutions:</p>
      <ol>
        <li><strong>Check System Requirements:</strong>
          <ul>
            <li>Ensure your computer meets the minimum system requirements for Windows 11, including TPM 2.0 and Secure Boot.</li>
          </ul>
        </li>
        <li><strong>Run Windows Update Troubleshooter:</strong>
          <ul>
            <li>Go to Settings > Update & Security > Troubleshoot, and run the Windows Update Troubleshooter to identify and fix issues.</li>
          </ul>
        </li>
        <li><strong>Check for Compatibility Issues:</strong>
          <ul>
            <li>Use the PC Health Check tool to check for any compatibility issues with your hardware and software.</li>
          </ul>
        </li>
        <li><strong>Free Up Disk Space:</strong>
          <ul>
            <li>Ensure you have sufficient disk space for the upgrade process by deleting unnecessary files and applications.</li>
          </ul>
        </li>
        <li><strong>Disable Antivirus Software:</strong>
          <ul>
            <li>Temporarily disable antivirus or security software that might interfere with the upgrade process.</li>
          </ul>
        </li>
      </ol>
      <p>By addressing these common issues, you can successfully upgrade to Windows 11 without major problems.</p>
    `
  },
  { 
    id: 29,
    title: "Slow Boot Times on Windows 10",
    sub_description: "Optimize startup programs and check for disk errors.",
    description: `
      <p>If your Windows 10 computer has slow boot times, try the following solutions:</p>
      <ol>
        <li><strong>Optimize Startup Programs:</strong>
          <ul>
            <li>Open Task Manager (Ctrl + Shift + Esc) and go to the Startup tab.</li>
            <li>Disable unnecessary programs that are slowing down the boot process.</li>
          </ul>
        </li>
        <li><strong>Check for Disk Errors:</strong>
          <ul>
            <li>Run the Disk Cleanup tool to remove temporary files and other unnecessary data.</li>
            <li>Use the Check Disk utility (chkdsk) to scan and repair disk errors.</li>
          </ul>
        </li>
        <li><strong>Update Drivers and BIOS:</strong>
          <ul>
            <li>Ensure all drivers and BIOS are up-to-date to fix any issues affecting boot times.</li>
          </ul>
        </li>
        <li><strong>Check for Malware:</strong>
          <ul>
            <li>Run a full system scan using reliable antivirus software to ensure there are no malware infections causing slow boot times.</li>
          </ul>
        </li>
      </ol>
      <p>Implementing these steps should help speed up your Windows 10 boot times.</p>
    `
  },
  { 
    id: 30,
    title: "Wi-Fi Connection Drops Frequently",
    sub_description: "Check router settings and update network drivers.",
    description: `
      <p>If your Wi-Fi connection drops frequently, follow these troubleshooting steps:</p>
      <ol>
        <li><strong>Check Router Settings:</strong>
          <ul>
            <li>Ensure your router's firmware is up-to-date.</li>
            <li>Check the router’s settings for any issues or restrictions affecting the connection.</li>
          </ul>
        </li>
        <li><strong>Update Network Drivers:</strong>
          <ul>
            <li>Visit the manufacturer's website to download and install the latest network drivers for your Wi-Fi adapter.</li>
          </ul>
        </li>
        <li><strong>Forget and Reconnect to the Network:</strong>
          <ul>
            <li>Forget the Wi-Fi network on your device and reconnect by entering the password again.</li>
          </ul>
        </li>
        <li><strong>Check for Interference:</strong>
          <ul>
            <li>Ensure there are no physical obstructions or electronic devices causing interference with your Wi-Fi signal.</li>
          </ul>
        </li>
      </ol>
      <p>These steps should help stabilize your Wi-Fi connection and reduce frequent drops.</p>
    `
  },
  {
    id: 31,
    title: "How to Activate Windows 10 with KMS Auto",
    sub_description: "Guide to activating Windows 10 using KMS Auto (At Your Own Risk).",
    description: `
      <p><strong>Note:</strong> Before starting the activation process, you need to disable real-time virus detection on Windows Defender. After the process is complete, it is crucial to enable real-time protection again.</p>
  
      <h3>Steps to Activate Windows 10 Using KMS Auto:</h3>
      <ol>
        <li><strong>Disable Real-Time Protection:</strong>
          <ul>
            <li>Open Windows Defender Security Center.</li>
            <li>Go to "Virus & threat protection".</li>
            <li>Click on "Manage settings" under the "Virus & threat protection settings" section.</li>
            <li>Toggle off "Real-time protection".</li>
          </ul>
        </li>
        <li><strong>Download and Install KMS Auto:</strong>
          <ul>
            <li><a href="/KMSAuto.zip" target="_blank">Download KMS Auto.</a> Password is <strong>ngaa</strong> </li>
            <li>Once downloaded, extract the ZIP file and run "KMSAuto.exe" as Administrator.</li>
          </ul>
        </li>
        <li><strong>Activate Windows 10:</strong>
          <ul>
            <li>Open the KMS Auto application.</li>
            <li>Click on the "Activation" button.</li>
            <li>Select "Activate Windows" and wait for the process to complete.</li>
          </ul>
        </li>
        <li><strong>Re-enable Real-Time Protection:</strong>
          <ul>
            <li>After successful activation, go back to Windows Defender Security Center.</li>
            <li>Re-enable "Real-time protection" by toggling it on.</li>
          </ul>
        </li>
        <li><strong>Verify Activation:</strong>
          <ul>
            <li>Right-click on "This PC" and select "Properties".</li>
            <li>Under "Windows Activation", verify that your copy of Windows 10 is activated.</li>
          </ul>
        </li>
      </ol>
  
      <h3>Advantages of Using KMS Auto:</h3>
      <ol>
        <li>Free and easy activation of Windows 10.</li>
        <li>Activation is permanent, and you won’t need to reactivate after updates.</li>
      </ol>
  
      <h3>Disadvantages and Risks:</h3>
      <ol>
        <li><strong>Legal Risks:</strong> Using KMS Auto is a violation of Microsoft’s terms of service and is considered illegal.</li>
        <li><strong>Security Risks:</strong> Disabling antivirus protection exposes your system to potential malware threats.</li>
        <li><strong>System Instability:</strong> Unauthorized activation methods can lead to system errors or instability.</li>
      </ol>
  
      <p><strong>Disclaimer:</strong> This method is provided for educational purposes only. The use of unauthorized software to activate Windows is illegal and may result in legal consequences. Proceed at your own risk.</p>
    `,
    videoUrl:'https://youtube.com//embed/WfqZUlsN5xg?si=JVGO1OX2eaavv81H',
    zipUrl:'/KMSAuto.zip'
  },
  {
    id: 32,
    title: "Dual Boot: Installing Linux Alongside Windows",
    sub_description: "Learn how to safely install Linux alongside Windows for a dual boot setup.",
    description: `<p>If you're interested in running both Windows and Linux on your computer, a dual boot setup is a great option. This guide will walk you through the process of installing Linux on a system that already has Windows installed, ensuring that both operating systems can coexist safely.</p>
    
    <h3><strong>Step 1:</strong> Backup Your Data</h3>
    <p>Before starting, it's crucial to backup all your important data. Dual booting can sometimes lead to data loss if not done correctly.</p>
    
    <h3><strong>Step 2:</strong> Create Space for Linux</h3>
    <p>You'll need to create a separate partition on your hard drive for Linux. This can be done using the Disk Management tool in Windows:</p>
    <ol>
      <li>Open Disk Management by pressing <code>Win + X</code> and selecting <strong>Disk Management</strong>.</li>
      <li>Right-click on your Windows partition (usually <code>C:</code>) and choose <strong>Shrink Volume</strong>.</li>
      <li>Specify the amount of space to shrink. This will be the space available for Linux.</li>
    </ol>
    
    <h3><strong>Step 3:</strong> Download a Linux Distribution</h3>
    <p>Check offical site on additional links below</p>
    <p>Choose a Linux distribution that suits your needs. Ubuntu is a popular choice for beginners. Download the ISO file from the official website.</p>
    
    <h3><strong>Step 4:</strong> Create a Bootable USB Drive</h3>
    <p>Use a tool like Rufus to create a bootable USB drive with the Linux ISO:</p>
    <ol>
      <li>Insert a USB drive and open Rufus.</li>
      <li>Select the Linux ISO file and the USB drive.</li>
      <li>Click <strong>Start</strong> to create the bootable USB.</li>
    </ol>
    
    <h3><strong>Step 5:</strong> Boot from the USB Drive</h3>
    <p>Restart your computer and boot from the USB drive. You may need to change the boot order in your BIOS/UEFI settings.</p>
    
    <h3><strong>Step 6:</strong> Install Linux</h3>
    <p>Once you've booted into the Linux installer, follow the on-screen instructions:</p>
    <ol>
      <li>Choose the option to install Linux alongside Windows.</li>
      <li>Allocate space for the Linux partition (you can use the previously created unallocated space).</li>
      <li>Complete the installation process.</li>
    </ol>
    
    <h3><strong>Step 7:</strong> Boot into Linux and Windows</h3>
    <p>After the installation, your computer will display a boot menu every time it starts, allowing you to choose between Linux and Windows.</p>
    
    <h3>Additional Tips:</h3>
    <ul>
      <li><strong>BIOS/UEFI Settings:</strong> Ensure Secure Boot is disabled if you're having trouble booting into Linux.</li>
      <li><strong>Grub Bootloader:</strong> Linux will install the GRUB bootloader, which will manage the dual boot process.</li>
      <li><strong>Troubleshooting:</strong> If you encounter any issues, refer to the official documentation of your chosen Linux distribution.</li>
    </ul>`,
    videoUrl: 'https://youtube.com//embed/JRdYSGh-g3s?si=kpKLXyW9kVczeomB',
    link: 'https://www.linux.org/pages/download/'
  },
  {
    id: 33,
    title: "HP Core i7 (Windows 11) Not Sharing Hotspot to Other Devices",
    sub_description: "Troubleshoot and fix issues with your HP Core i7 (Windows 11) not sharing its hotspot with other devices.",
    description: `<p>If your HP Core i7 laptop running Windows 11 is not sharing its hotspot to other devices, there could be several reasons for this issue. Follow these steps to troubleshoot and resolve the problem.</p>
    
    <h3><u><a href="ms-settings:network-status?activationSource=SMC-IA-4027616" target="_blank" role="button" class="ocpExternalLink supLinkButton" data-bi-type="anchor">Step 1: Check Your Network Settings </a></u></h3>
    <p>Ensure that your hotspot is properly configured:</p>
    <ol>
      <li>Open <strong>Settings</strong> by pressing <code>Win + I</code> and navigate to <strong>Network & Internet</strong>.</li>
      <li>Select <strong>Mobile hotspot</strong> from the left sidebar.</li>
      <li>Make sure the toggle switch for <strong>Mobile hotspot</strong> is turned on.</li>
      <li>Check the network name and password, and ensure they match what you're trying to connect to.</li>
    </ol>
    
    <h3><u><a href="ms-settings:energyrecommendations" target="_blank" role="button" class="ocpExternalLink supLinkButton" data-bi-type="anchor">Step 2: Disable Power Saving Features</a></u></h3>
    <p>Windows 11 might be turning off your hotspot to save power:</p>
    <ol>
      <li>Go to <strong>Settings</strong> > <strong>System</strong> > <strong>Power & battery</strong>.</li>
      <li>Under the <strong>Battery</strong> section, click <strong>Battery saver</strong> and make sure it is turned off.</li>
      <li>Click on <strong>Change advanced power settings</strong>, then expand <strong>Wireless Adapter Settings</strong> and set it to <strong>Maximum Performance</strong>.</li>
    </ol>
    
    <h3><u>Step 3: Update Network Drivers</u></h3>
    <p>Outdated network drivers can cause connectivity issues:</p>
    <ol>
      <li>Right-click on the <strong>Start</strong> menu and select <strong>Device Manager</strong>.</li>
      <li>Expand the <strong>Network adapters</strong> section.</li>
      <li>Right-click your Wi-Fi adapter and select <strong>Update driver</strong>.</li>
      <li>Choose <strong>Search automatically for updated driver software</strong>.</li>
    </ol>
    <p>For a detailed guide, you can refer to the official Microsoft support page:</p>
    <p><a href="https://support.microsoft.com/en-us/windows/update-drivers-manually-in-windows-ec62f46c-ff14-c91d-eead-d7126dc1f7b6" target="_blank" role="button" class="ocpExternalLink supLinkButton" data-bi-type="anchor" target="_blank" rel="noopener noreferrer">Update Drivers Manually in Windows - Microsoft Support <strong>Click here.</strong></a></p>

    
    <h3><u>Step 4: Reset Network Settings</u></h3>
    <p>If the issue persists, try resetting your network settings:</p>
    <ol>
      <li>Open <strong>Settings</strong> and go to <strong>Network & Internet</strong>.</li>
      <li>Scroll down and click on <strong>Network reset</strong>.</li>
      <li>Click <strong>Reset now</strong>, and your computer will restart. You'll need to reconfigure your network settings afterward.</li>
    </ol>
    
    <h3><u>Step 5: Use a Different Wi-Fi Band</u></h3>
    <p>Some devices may not support the 5 GHz Wi-Fi band:</p>
    <ol>
      <li>Go to <strong>Settings</strong> > <strong>Network & Internet</strong> > <strong>Mobile hotspot</strong>.</li>
      <li>Under <strong>Related settings</strong>, click on <strong>Edit</strong>.</li>
      <li>Change the <strong>Network band</strong> to 2.4 GHz and save changes.</li>
    </ol>
    
    <h3><u>Additional Tips:</u></h3>
    <ul>
      <li><strong>Security Software:</strong> Temporarily disable any antivirus or firewall software that might be blocking hotspot connections.</li>
      <li><strong>Windows Updates:</strong> Ensure your system is up to date, as updates can fix known issues.</li>
      <li><strong>Troubleshooting Tools:</strong> Use Windows' built-in troubleshooting tools to diagnose and fix the issue automatically.</li>
    </ul>`,
    videoUrl: 'https://youtube.com//embed/xBrttqaEEAI?si=gJp82ySpPPic3hUN'
  },
  {
    "id": 34,
    "title": "Lenovo T540p Thinkpad Fan Error: Computer Not Turning On",
    "sub_description": "Fix the fan error on a Lenovo T540p Thinkpad that prevents the computer from turning on.",
    "description": `<p>If your Lenovo T540p Thinkpad shows a fan error and doesn't turn on, it could be due to a faulty fan or related components. Here’s a step-by-step guide to help you resolve the issue.</p>
    
    <h3><u>Step 1: Check for Physical Obstructions</u></h3>
    <p>Before diving into the hardware, ensure there is nothing physically obstructing the fan:</p>
    <ol>
      <li>Turn off your laptop and disconnect any power sources.</li>
      <li>Remove the back panel or bottom cover to access the fan.</li>
      <li>Inspect the fan for any dust, dirt, or debris that may be blocking the blades.</li>
      <li>If you find any obstructions, clean them carefully using compressed air or a soft brush.</li>
    </ol>
  
    <h3><u>Step 2: Check the Fan’s Connection</u></h3>
    <p>Loose connections can also cause fan errors:</p>
    <ol>
      <li>With the back panel removed, locate the fan’s power cable.</li>
      <li>Ensure the cable is securely connected to the motherboard or the fan controller.</li>
      <li>If the cable is loose, gently reconnect it, making sure it is snug and secure.</li>
    </ol>
  
    <h3><u>Step 3: Test the Fan Manually</u></h3>
    <p>If the fan still isn't working after checking the connection, you can test it manually:</p>
    <ol>
      <li>Use a multimeter to check the fan’s voltage.</li>
      <li>If there’s no voltage or power, the fan may need to be replaced.</li>
      <li>If voltage is present but the fan doesn't spin, the fan is likely faulty.</li>
    </ol>
  
    <h3><u>Step 4: BIOS Fan Test</u></h3>
    <p>Many Lenovo laptops have built-in diagnostics that you can access from the BIOS:</p>
    <ol>
      <li>Turn on your laptop and immediately press <strong>F1</strong> to enter the BIOS menu.</li>
      <li>Navigate to the <strong>Diagnostics</strong> section and select <strong>Fan Test</strong>.</li>
      <li>If the fan fails the test, this confirms that the fan is defective and needs replacing.</li>
    </ol>
  
    <h3><u>Step 5: Replace the Faulty Fan</u></h3>
    <p>If the fan is determined to be faulty, you may need to replace it:</p>
    <ol>
      <li>Find a compatible replacement fan for your Lenovo T540p Thinkpad.</li>
      <li>Carefully remove the old fan from the laptop and install the new one.</li>
      <li>Reassemble the laptop and check if the error is resolved.</li>
    </ol>
  
    <h3><u>Additional Tips:</u></h3>
    <ul>
      <li><strong>Overheating Prevention:</strong> Ensure that your laptop is used on a flat, hard surface to improve airflow and prevent overheating.</li>
      <li><strong>Driver and BIOS Updates:</strong> Sometimes, fan errors can be caused by outdated drivers or BIOS. Make sure both are up to date by visiting the official Lenovo support page.</li>
      <li><strong>Service Support:</strong> If the issue persists even after replacing the fan, it might be a motherboard or other hardware failure. Consider contacting Lenovo support or a technician for further assistance.</li>
    </ul>`,
    "videoUrl": "https://youtube.com//embed/q5ZvdnGTibs?si=ogDwh78du-GNnjWD"
  },
  {
    "id": 35,
    "title": "HP Victus Laptop Touchpad Not Working After Installing Windows 11",
    "sub_description": "Resolve the issue of the touchpad not working on an HP Victus Laptop 16-d1xxx after installing Windows 11.",
    "description": `<p>If the touchpad on your HP Victus Laptop 16-d1xxx is not working after a successful installation of Windows 11, it could be due to driver issues, incorrect settings, or hardware problems. Follow these steps to troubleshoot and fix the issue:</p>
  
    <h3><u>Step 1: Check Touchpad Settings</u></h3>
    <p>Ensure the touchpad is enabled in the settings:</p>
    <ol>
      <li>Press <code>Win + I</code> to open <strong>Settings</strong>.</li>
      <li>Navigate to <strong>Bluetooth & devices</strong> > <strong>Touchpad</strong>.</li>
      <li>Ensure the <strong>Touchpad</strong> toggle is turned on.</li>
      <li>Adjust sensitivity and other settings to ensure proper functionality.</li>
    </ol>
  
    <h3><u>Step 2: Enable Touchpad in BIOS</u></h3>
    <p>Sometimes, the touchpad might be disabled at the BIOS level:</p>
    <ol>
      <li>Restart your laptop and press <strong>F10</strong> (or the appropriate key for your model) to enter the BIOS menu.</li>
      <li>Look for an option related to the touchpad under <strong>Advanced</strong> or <strong>Input/Devices</strong>.</li>
      <li>Ensure the touchpad is enabled, save changes, and restart your laptop.</li>
    </ol>
  
    <h3><u>Step 3: Update or Reinstall Touchpad Drivers</u></h3>
    <p>Outdated or missing drivers could cause the touchpad to stop working:</p>
    <ol>
      <li>Right-click on the <strong>Start</strong> menu and select <strong>Device Manager</strong>.</li>
      <li>Expand the <strong>Human Interface Devices</strong> or <strong>Mice and other pointing devices</strong> section.</li>
      <li>Right-click on the touchpad device (e.g., Synaptics or ELAN) and select <strong>Update driver</strong>.</li>
      <li>Select <strong>Search automatically for updated driver software</strong>.</li>
      <li>If no updates are found, uninstall the touchpad driver and restart your laptop. Windows will attempt to reinstall the driver automatically.</li>
    </ol>
  
    <h3><u>Step 4: Install HP Support Assistant</u></h3>
    <p>Use HP's tool to identify and install necessary drivers:</p>
    <ol>
      <li>Download and install the <a href="https://www.hp.com/us-en/campaigns/hpsupportassistant/hpsupport.html" target="_blank" rel="noopener noreferrer">HP Support Assistant</a>.</li>
      <li>Run the software and let it scan your system for missing or outdated drivers.</li>
      <li>Install the recommended drivers, particularly those related to the touchpad.</li>
    </ol>
  
    <h3><u>Step 5: Check for Windows Updates</u></h3>
    <p>Ensure your system is up to date with the latest patches:</p>
    <ol>
      <li>Go to <strong>Settings</strong> > <strong>Windows Update</strong>.</li>
      <li>Click <strong>Check for updates</strong>.</li>
      <li>Install any available updates and restart your laptop.</li>
    </ol>
  
    <h3><u>Step 6: Run the Troubleshooter</u></h3>
    <p>Use the built-in troubleshooting tool to diagnose the issue:</p>
    <ol>
      <li>Press <code>Win + I</code> to open <strong>Settings</strong>.</li>
      <li>Navigate to <strong>System</strong> > <strong>Troubleshoot</strong> > <strong>Other troubleshooters</strong>.</li>
      <li>Find and run the <strong>Hardware and Devices</strong> troubleshooter.</li>
    </ol>
  
    <h3><u>Step 7: Reset Windows Touchpad Settings</u></h3>
    <p>If the issue persists, try resetting touchpad settings to their defaults:</p>
    <ol>
      <li>Go to <strong>Settings</strong> > <strong>Bluetooth & devices</strong> > <strong>Touchpad</strong>.</li>
      <li>Scroll down and click <strong>Reset</strong> under <strong>Reset touchpad settings</strong>.</li>
    </ol>
  
    <h3><u>Additional Tips:</u></h3>
    <ul>
      <li><strong>External Mouse:</strong> Use an external mouse temporarily to assist in troubleshooting.</li>
      <li><strong>Hardware Issues:</strong> If none of the above solutions work, the touchpad might be physically damaged. Consider contacting HP support for further assistance.</li>
      <li><strong>Clean Installation:</strong> In rare cases, a fresh installation of Windows 11 may resolve persistent issues.</li>
    </ul>`,
    "videoUrl": "https://youtube.com//embed/egAuok8GODs?si=kSmt5RoOyKXikSoN"
  },
  {
    "id": 36,
    "title": "Failing to Install Intel HP Storage Drivers on HP All-in-One",
    "sub_description": "Troubleshoot and resolve issues with installing Intel HP storage drivers on an HP All-in-One computer when the hard drive is not detected.",
    "description": `<p>If you are unable to install the Intel HP storage drivers on your HP All-in-One, and the system fails to detect the installed hard drive, it could be due to compatibility, configuration, or driver issues. Follow these steps to identify and fix the problem:</p>
  
    <h3><u>Step 1: Verify Hard Drive Connection</u></h3>
    <p>Ensure the hard drive is properly connected and functional:</p>
    <ol>
      <li>Turn off the computer and unplug it from the power source.</li>
      <li>Open the back panel and check if the hard drive is securely connected to the SATA port and power cable.</li>
      <li>If possible, test the hard drive on another computer to confirm its functionality.</li>
    </ol>
  
    <h3><u>Step 2: Check BIOS Settings</u></h3>
    <p>Ensure the hard drive is recognized in the BIOS:</p>
    <ol>
      <li>Restart the computer and press <strong>F10</strong> (or the appropriate key for your model) to access the BIOS.</li>
      <li>Navigate to the <strong>Storage</strong> or <strong>Boot Options</strong> section.</li>
      <li>Ensure the hard drive is listed and the SATA mode is set to <strong>AHCI</strong> or the appropriate mode for your system.</li>
      <li>If the hard drive is not listed, try resetting the BIOS to its default settings.</li>
    </ol>
  
    <h3><u>Step 3: Update the BIOS</u></h3>
    <p>An outdated BIOS may not support the storage drivers:</p>
    <ol>
      <li>Visit the <a href="https://support.hp.com/" target="_blank" rel="noopener noreferrer">HP Support website</a>.</li>
      <li>Search for your HP All-in-One model and download the latest BIOS update.</li>
      <li>Follow the provided instructions to install the update.</li>
    </ol>
  
    <h3><u>Step 4: Use the Correct Storage Drivers</u></h3>
    <p>Ensure you are using the correct drivers for your hardware:</p>
    <ol>
      <li>Go to the <a href="https://support.hp.com/" target="_blank" rel="noopener noreferrer">HP Support website</a> and search for your All-in-One model.</li>
      <li>Download the appropriate Intel storage drivers compatible with your operating system.</li>
      <li>During installation, run the driver as an administrator by right-clicking the installer and selecting <strong>Run as administrator</strong>.</li>
    </ol>
  
    <h3><u>Step 5: Load Storage Drivers During Windows Installation</u></h3>
    <p>If installing a new operating system, the hard drive may require drivers to be loaded manually:</p>
    <ol>
      <li>During the Windows installation process, click <strong>Load driver</strong> when prompted.</li>
      <li>Insert a USB drive containing the downloaded storage drivers and select them.</li>
      <li>Continue with the installation process.</li>
    </ol>
  
    <h3><u>Step 6: Run Diagnostics</u></h3>
    <p>Check for hardware issues using built-in diagnostic tools:</p>
    <ol>
      <li>Restart your computer and press <strong>F2</strong> (or the appropriate key) to enter the HP Diagnostic Utility.</li>
      <li>Run a storage test to ensure the hard drive is functional.</li>
      <li>If the hard drive fails the test, consider replacing it.</li>
    </ol>
  
    <h3><u>Additional Tips:</u></h3>
    <ul>
      <li>Go to the <a href="https://h30434.www3.hp.com/t5/Desktop-Operating-Systems-and-Recovery/driver-not-found-on-HP-desktop-all-in-on-series-HP-All-in/td-p/8287293" target="_blank" rel="noopener noreferrer">HP Community</a> and view this solved case, <strong>"driver not found on HP desktop all in on series HP All-in-One PC 24-df1000i (1W762AV)".</strong></li>
      <li><strong>Secure Boot:</strong> If enabled, Secure Boot may prevent certain drivers from being installed. Disable it temporarily in the BIOS if needed.</li>
      <li><strong>Compatibility:</strong> Ensure the hard drive and drivers are compatible with your All-in-One model and operating system.</li>
      <li><strong>Firmware Update:</strong> Check if the hard drive has a firmware update available from the manufacturer's website.</li>
      <li><strong>HP Support:</strong> Contact HP support if the issue persists and no hardware faults are detected.</li>
    </ul>`,
    "videoUrl": "https://youtube.com//embed/m-2cPjepIj8?si=s7SQPp-o3WZk1Uwb"
  },
  {
    "id": 37,
    "title": "How to Install Rapid Storage Drivers",
    "sub_description": "A comprehensive guide on installing Intel Rapid Storage Technology (RST) drivers to improve storage performance and reliability.",
    "description": `<p>Installing Intel Rapid Storage Technology (RST) drivers can enhance your system's storage performance and reliability, especially when using RAID configurations. Follow these steps to correctly install the RST drivers on your system:</p>
  
    <h3><u>Step 1: Download the Appropriate Drivers</u></h3>
    <p>Ensure you have the correct RST drivers for your system:</p>
    <ol>
      <li>Visit the <a href="https://www.intel.com/content/www/us/en/download-center/home.html" target="_blank" rel="noopener noreferrer">Intel Download Center</a>.</li>
      <li>Search for <strong>Intel Rapid Storage Technology</strong> and select the version compatible with your system.</li>
      <li>Download the appropriate driver package based on your operating system and system architecture (32-bit or 64-bit).</li>
    </ol>
  
    <h3><u>Step 2: Check BIOS Settings</u></h3>
    <p>Verify that your BIOS is configured correctly for RST:</p>
    <ol>
      <li>Restart your computer and press the appropriate key (e.g., <strong>F2</strong>, <strong>F10</strong>, <strong>DEL</strong>) to access the BIOS.</li>
      <li>Navigate to the <strong>Storage Configuration</strong> or <strong>SATA Mode</strong> section.</li>
      <li>Ensure the SATA mode is set to <strong>RAID</strong> or <strong>Intel RST</strong>.</li>
      <li>Save changes and exit the BIOS.</li>
    </ol>
  
    <h3><u>Step 3: Install the Drivers in Windows</u></h3>
    <p>Follow these steps to install the downloaded drivers:</p>
    <ol>
      <li>Locate the downloaded RST driver file and extract it if necessary.</li>
      <li>Right-click on the setup file and select <strong>Run as administrator</strong>.</li>
      <li>Follow the on-screen instructions to complete the installation.</li>
      <li>Restart your computer once the installation is finished.</li>
    </ol>
  
    <h3><u>Step 4: Install Drivers During Windows Installation</u></h3>
    <p>If you're installing a new operating system and the storage drive is not detected, you may need to load the RST drivers manually:</p>
    <ol>
      <li>During the Windows installation process, click <strong>Load driver</strong> when prompted.</li>
      <li>Insert a USB drive containing the downloaded RST drivers and select them.</li>
      <li>Continue with the Windows installation process after the storage drive is recognized.</li>
    </ol>
  
    <h3><u>Step 5: Verify Driver Installation</u></h3>
    <p>Ensure the drivers are installed correctly:</p>
    <ol>
      <li>Press <strong>Win + X</strong> and select <strong>Device Manager</strong>.</li>
      <li>Expand the <strong>Storage controllers</strong> section.</li>
      <li>Check if the Intel RST driver is listed and functioning correctly.</li>
    </ol>
  
    <h3><u>Step 6: Enable RST Features</u></h3>
    <p>After installation, enable RST features to optimize performance:</p>
    <ol>
      <li>Open the Intel RST application from the Start menu.</li>
      <li>Configure RAID arrays or other features as needed.</li>
      <li>Apply the changes and restart your system if prompted.</li>
    </ol>
  
    <h3><u>Additional Tips:</u></h3>
    <ul>
      <li><strong>Compatibility:</strong> Ensure the RST version is compatible with your motherboard and operating system.</li>
      <li><strong>Firmware Update:</strong> Update your SSD or RAID controller firmware if needed.</li>
      <li><strong>Backup Data:</strong> Backup important data before configuring RAID or making significant storage changes.</li>
      <li><strong>Intel Support:</strong> Refer to Intel's official documentation for advanced configurations or troubleshooting.</li>
    </ul>`,
    "videoUrl": "https://youtube.com/embed/SqD1EhYGJiE?si=w8zfjuiwUTexEyEU"
  },
  {
    "id": 100,
    "title": "Blue Screen of Death (BSOD) When Connecting External USB Type-C Ethernet Cable",
    "sub_description": "Troubleshoot and fix the Blue Screen of Death (BSOD) error occurring when connecting an external USB Type-C Ethernet cable.",
    "description": `<p>If you encounter a Blue Screen of Death (BSOD) when connecting an external USB Type-C Ethernet cable, the issue could be related to driver conflicts, system updates, or faulty hardware. Follow these steps to troubleshoot and resolve the problem.</p>
  
    <h3><u>Step 1: Boot into Safe Mode</u></h3>
    <p>Start by booting into Safe Mode to avoid further BSODs while troubleshooting:</p>
    <ol>
      <li>Restart your computer.</li>
      <li>As the system boots, press <strong>F8</strong> (or <strong>Shift + F8</strong>) to enter the Advanced Boot Options.</li>
      <li>Select <strong>Safe Mode</strong> and press <strong>Enter</strong>.</li>
    </ol>
  
    <h3><u>Step 2: Update USB and Ethernet Drivers</u></h3>
    <p>Outdated or incompatible drivers can cause BSODs. Update your USB and Ethernet drivers:</p>
    <ol>
      <li>Press <strong>Win + X</strong> and select <strong>Device Manager</strong>.</li>
      <li>Expand the <strong>Universal Serial Bus Controllers</strong> and <strong>Network Adapters</strong> sections.</li>
      <li>Right-click the USB and Ethernet devices and select <strong>Update Driver</strong>.</li>
      <li>Choose <strong>Search automatically for updated driver software</strong>.</li>
      <li>If an update is found, install it and restart your computer.</li>
    </ol>
  
    <h3><u>Step 3: Roll Back Drivers</u></h3>
    <p>If updating the drivers doesn't help, try rolling back the drivers to a previous version:</p>
    <ol>
      <li>In <strong>Device Manager</strong>, right-click the problematic driver (USB or Ethernet).</li>
      <li>Select <strong>Properties</strong> and go to the <strong>Driver</strong> tab.</li>
      <li>If the <strong>Roll Back Driver</strong> option is available, click it and follow the on-screen instructions.</li>
      <li>Restart your computer to check if the issue is resolved.</li>
    </ol>
  
    <h3><u>Step 4: Uninstall and Reinstall the USB Type-C Ethernet Adapter</u></h3>
    <p>Try uninstalling and reinstalling the external USB Type-C Ethernet adapter:</p>
    <ol>
      <li>In <strong>Device Manager</strong>, right-click the Ethernet adapter and select <strong>Uninstall device</strong>.</li>
      <li>Disconnect the USB Type-C Ethernet cable and restart your computer.</li>
      <li>After reboot, reconnect the cable, and Windows should automatically reinstall the drivers.</li>
    </ol>
  
    <h3><u>Step 5: Check for Windows Updates</u></h3>
    <p>Ensure your system is up to date with the latest Windows updates:</p>
    <ol>
      <li>Open <strong>Settings</strong> and go to <strong>Windows Update</strong>.</li>
      <li>Click <strong>Check for updates</strong> and install any available updates.</li>
      <li>Restart your computer after installing updates.</li>
    </ol>
  
    <h3><u>Step 6: Test the Hardware</u></h3>
    <p>If the issue persists, test the hardware to rule out any problems with the USB Type-C Ethernet adapter:</p>
    <ol>
      <li>Try using the Ethernet adapter on a different computer to see if the issue persists.</li>
      <li>If it works on another computer, the problem might be with your system's hardware or configuration.</li>
      <li>Try using a different USB port or Type-C cable if available.</li>
    </ol>
  
    <h3><u>Step 7: Check System Logs for Error Codes</u></h3>
    <p>Review the Windows Event Viewer for error codes related to the BSOD:</p>
    <ol>
      <li>Press <strong>Win + X</strong> and select <strong>Event Viewer</strong>.</li>
      <li>Go to <strong>Windows Logs</strong> > <strong>System</strong>.</li>
      <li>Look for error entries related to USB or Ethernet devices around the time of the BSOD.</li>
      <li>Note any specific error codes or messages and search for solutions online.</li>
    </ol>
  
    <h3><u>Step 8: Perform a System Restore</u></h3>
    <p>If none of the above steps resolve the issue, try performing a system restore to revert your system back to a working state:</p>
    <ol>
      <li>Press <strong>Win + R</strong>, type <strong>rstrui</strong>, and press <strong>Enter</strong>.</li>
      <li>Follow the on-screen instructions to choose a restore point from when the system was working properly.</li>
      <li>Complete the restore process and restart your computer.</li>
    </ol>
  
    <h3><u>Additional Tips:</u></h3>
    <ul>
      <li><strong>Overheating:</strong> Ensure that your laptop or desktop is not overheating, as high temperatures can cause hardware failures that trigger BSODs.</li>
      <li><strong>Third-Party Software:</strong> If you recently installed third-party software, it might be conflicting with the drivers. Try uninstalling recent software and check for stability.</li>
      <li><strong>RAM Test:</strong> Run a memory diagnostic test to ensure there are no issues with your RAM.</li>
    </ul>`,
    "videoUrl": "https://youtube.com//embed//UJ8syAvPHKU?si=dQzvQMENdksP7Ll8"
  },
  {
    "id": 101,
    "title": `How to Remove BitLocker If You Forgot the Password on Kali Linux`,
    "sub_description": `Learn how to unlock or remove BitLocker encryption when you have forgotten the password.`,
    "description": `<p>If you have a BitLocker-encrypted drive and forgot the password, it can be challenging to access your data. However, there are a few methods you can try to remove or bypass BitLocker encryption.</p>  

    <h3>Method 1: Use the BitLocker Recovery Key</h3>  
    <p>When you enabled BitLocker, you were prompted to save a recovery key. If you have access to this key, follow these steps:</p>  
    <ol>  
        <li>Insert the encrypted drive into a Windows computer.</li>  
        <li>When prompted for the password, click <strong>More options</strong> and then select <strong>Enter recovery key</strong>.</li>  
        <li>Enter the 48-digit recovery key to unlock the drive.</li>  
        <li>Once unlocked, you can decrypt or remove BitLocker from the drive.</li>  
    </ol>  

    <h3>Method 2: Remove BitLocker via Command Prompt (Windows)</h3>  
    <p>If you don’t have the password but can access a Windows system, use Command Prompt:</p>  
    <ol>  
        <li>Press <code>Win + X</code> and select <strong>Command Prompt (Admin)</strong>.</li>  
        <li>Type the following command to check the status of BitLocker:  
            <code>manage-bde -status</code>  
        </li>  
        <li>To decrypt and remove BitLocker, use:  
            <code>manage-bde -off X:</code>  
            (Replace <code>X</code> with the drive letter of the encrypted partition.)  
        </li>  
    </ol>  

    <h3>Method 3: Format the Drive (Data Loss Warning)</h3>  
    <p>If you don’t have the recovery key and need to use the drive, the only option left is formatting, which will erase all data:</p>  
    <ol>  
        <li>Open <strong>Disk Management</strong> in Windows (<code>Win + X</code> &rarr; <strong>Disk Management</strong>).</li>  
        <li>Find the BitLocker-protected drive, right-click it, and choose <strong>Format</strong>.</li>  
        <li>Follow the prompts to erase and reformat the drive.</li>  
    </ol>  

    <h3>Additional Notes</h3>  
    <ul>  
        <li>If you are trying to access the BitLocker drive from Kali Linux, you may need to use <strong>Dislocker</strong>, a tool designed for reading BitLocker-encrypted drives on Linux.</li>  
        <li>Without the recovery key or password, there is no known way to decrypt BitLocker without losing data.</li>  
    </ul>`,  

    "videoUrl": "https://youtube.com//embed//cF2xnVx9iuk?si=BrLAaIovYNLtbLg4"
},
        
];
