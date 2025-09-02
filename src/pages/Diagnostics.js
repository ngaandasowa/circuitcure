import React, { useState, useEffect, useContext } from 'react';
import { FaDatabase, FaLaptopCode, FaServer, FaMemory, FaHdd, FaMicrochip, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import DarkModeContext from '../DarkModeContext';

function Diagnostics() {
  const [deviceInfo, setDeviceInfo] = useState({
    cpuUsage: 'N/A',
    memoryUsage: 'N/A',
    diskSpace: 'N/A',
    os: 'Unknown',
    architecture: 'Unknown',
    antivirus: 'Unknown',
    storageDevices: [],
  });

  const [navigatorInfo, setNavigatorInfo] = useState({
    userAgent: 'Unknown',
    platform: 'Unknown',
    hardwareConcurrency: 'Unknown',
    batteryLevel: 'Unknown',
    networkType: 'Unknown',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [formData, setFormData] = useState({
    cpuUsage: '',
    memoryUsage: '',
    diskSpace: '',
    os: '',
    architecture: '',
    antivirus: '',
    storageDevices: '',
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchNavigatorInfo = async () => {
      if ('getBattery' in navigator) {
        try {
          const battery = await navigator.getBattery();
          setNavigatorInfo({
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            hardwareConcurrency: navigator.hardwareConcurrency || 'Unknown',
            batteryLevel: battery ? `${Math.round(battery.level * 100)}%` : 'Unknown',
            networkType: navigator.connection ? navigator.connection.effectiveType : 'Unknown',
          });
        } catch (error) {
          console.error('Error fetching battery info:', error);
        }
      } else {
        console.warn('Battery API not supported in this browser.');
        setNavigatorInfo({
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          hardwareConcurrency: navigator.hardwareConcurrency || 'Unknown',
          batteryLevel: 'Not supported',
          networkType: navigator.connection ? navigator.connection.effectiveType : 'Unknown',
        });
      }
    };
  
    fetchNavigatorInfo();
  }, []);
  

  useEffect(() => {
    if (isFormSubmitted) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        generateRecommendations(deviceInfo);
      }, 3000); // Delay for simulating analysis
    }
  }, [isFormSubmitted, deviceInfo]);

  const validateForm = () => {
    const newErrors = {};

    // CPU Usage validation
    if (formData.cpuUsage && (isNaN(formData.cpuUsage) || formData.cpuUsage < 0 || formData.cpuUsage > 100)) {
      newErrors.cpuUsage = 'CPU Usage must be a number between 0 and 100.';
    }

    // Memory Usage validation
    if (formData.memoryUsage && (isNaN(formData.memoryUsage) || formData.memoryUsage < 0 || formData.memoryUsage > 100)) {
      newErrors.memoryUsage = 'Memory Usage must be a number between 0 and 100.';
    }

    // Disk Space validation
    if (formData.diskSpace && (isNaN(formData.diskSpace) || formData.diskSpace <= 0)) {
      newErrors.diskSpace = 'Disk Space must be a positive number.';
    }

    // Operating System validation
    const validOS = ['Windows', 'macOS', 'Linux', 'Ubuntu', 'Fedora', 'Debian', 'Arch Linux'];
    if (formData.os && !validOS.includes(formData.os)) {
      newErrors.os = 'Please enter a valid operating system (e.g., Windows, macOS, Linux).';
    }

    // Architecture validation
    if (formData.architecture && formData.architecture !== '32' && formData.architecture !== '64') {
      newErrors.architecture = 'Invalid architecture. Please enter either 32 or 64.';
    }

    // Antivirus validation
    const validAntiviruses = ['Eseet', 'Microsoft Defender', 'Norton', 'McAfee', 'Avast', 'Bitdefender', 'Kaspersky', 'Windows Defender', 'AVG'];
    if (formData.antivirus && !validAntiviruses.includes(formData.antivirus)) {
      newErrors.antivirus = 'Please enter a valid antivirus software name.';
    }

    // Storage Devices validation
    if (formData.storageDevices && !formData.storageDevices.split(',').every(s => s.trim())) {
      newErrors.storageDevices = 'Please enter a valid comma-separated list of storage devices.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setDeviceInfo({
        cpuUsage: formData.cpuUsage,
        memoryUsage: formData.memoryUsage,
        diskSpace: formData.diskSpace,
        os: formData.os,
        architecture: formData.architecture,
        antivirus: formData.antivirus,
        storageDevices: formData.storageDevices.split(',').map((s) => ({ name: s.trim(), type: 'Unknown', size: 'Unknown' })),
      });
      setIsFormSubmitted(true);
    }
  };

  const handleRedoAnalysis = () => {
    setIsFormSubmitted(false);
    setRecommendations([]); // Clear recommendations on redo
  };

  const generateRecommendations = (data) => {
    const newRecommendations = [];
    if (data.cpuUsage && parseFloat(data.cpuUsage) > 80) {
      newRecommendations.push('Consider closing CPU-intensive programs or upgrading your CPU.');
    }
    if (data.memoryUsage && parseFloat(data.memoryUsage) > 80) {
      newRecommendations.push('Consider upgrading your RAM or closing memory-intensive programs.');
    }
    if (data.diskSpace && parseFloat(data.diskSpace) < 10) {
      newRecommendations.push('Low disk space. Consider freeing up space or upgrading your storage.');
    }
    if (data.antivirus && data.antivirus === 'None') {
      newRecommendations.push('It is recommended to install antivirus software to protect your system.');
    }

    if (newRecommendations.length === 0) {
      newRecommendations.push('Your PC is performing optimally based on the provided information.');
    }

    setRecommendations(newRecommendations);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-100 text-neutral-900'} p-4 transition-colors duration-500`}>
      
      {/* Header Ticker for Navigator Info */}
      <div className={`w-full ${darkMode ? 'bg-neutral-800' : 'bg-neutral-200'} py-2 mb-4`}>
      <div className="marquee-container">
  <div className="marquee-content">
    <span className="icon">🌐</span>{`User Agent: ${navigatorInfo.userAgent} | `}
    <span className="icon">💻</span>{`Platform: ${navigatorInfo.platform} | `}
    <span className="icon">🖥️</span>{`Cores: ${navigatorInfo.hardwareConcurrency} | `}
    <span className="icon">🔋</span>{`Battery Level: ${navigatorInfo.batteryLevel} | `}
    <span className="icon">📶</span>{`Network Type: ${navigatorInfo.networkType} | `}
  </div>
</div>
      </div>

      <header className="w-full max-w-3xl flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Diagnostics</h1>
        <FaLightbulb onClick={toggleModal} className="text-3xl cursor-pointer" />
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleModal}></div>
          <div className={`relative z-50 w-full max-w-md p-6 rounded-lg shadow-lg ${darkMode ? 'bg-neutral-800 text-neutral-100' : 'bg-white text-neutral-900'}`}>
            <h2 className="text-2xl font-bold mb-4">System Information Guide</h2>
            <p className="mb-2">Follow these steps to get the exact system information for your device:</p>
            <h3 className="text-xl font-semibold">Windows:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Press <strong>Win + R</strong> and type <strong>dxdiag</strong> to open the DirectX Diagnostic Tool.</li>
              <li>Check your system information in the System tab.</li>
            </ul>
            <h3 className="text-xl font-semibold">Mac:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Click the Apple menu and select <strong>About This Mac</strong>.</li>
              <li>View the Overview tab for system details.</li>
            </ul>
            <h3 className="text-xl font-semibold">Linux:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Open the terminal and type <strong>uname -a</strong> for kernel information.</li>
              <li>Use <strong>lshw</strong> or <strong>inxi</strong> for detailed system info (may require installation).</li>
            </ul>
            <button onClick={toggleModal} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
          </div>
        </div>
      )}

      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit}>
        

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="cpuUsage">CPU Usage (%):</label>
          <input
            type="number"
            id="cpuUsage"
            name="cpuUsage"
            value={formData.cpuUsage}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'}`}
          />
          {errors.cpuUsage && <p className="text-red-600 mt-2">{errors.cpuUsage}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="memoryUsage">Memory Usage (%):</label>
          <input
            type="number"
            id="memoryUsage"
            name="memoryUsage"
            value={formData.memoryUsage}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'}`}
          />
          {errors.memoryUsage && <p className="text-red-600 mt-2">{errors.memoryUsage}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="diskSpace">Disk Space (GB):</label>
          <input
            type="number"
            id="diskSpace"
            name="diskSpace"
            value={formData.diskSpace}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'}`}
          />
          {errors.diskSpace && <p className="text-red-600 mt-2">{errors.diskSpace}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="os">Operating System:</label>
          <input
            type="text"
            id="os"
            name="os"
            value={formData.os}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'}`}
          />
          {errors.os && <p className="text-red-600 mt-2">{errors.os}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="architecture">Architecture (32 or 64):</label>
          <input
            type="text"
            id="architecture"
            name="architecture"
            value={formData.architecture}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'}`}
          />
          {errors.architecture && <p className="text-red-600 mt-2">{errors.architecture}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="antivirus">Antivirus Software:</label>
          <input
            type="text"
            id="antivirus"
            name="antivirus"
            value={formData.antivirus}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'}`}
          />
          {errors.antivirus && <p className="text-red-600 mt-2">{errors.antivirus}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="storageDevices">Storage Devices (comma-separated):</label>
          <input
            type="text"
            id="storageDevices"
            name="storageDevices"
            value={formData.storageDevices}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded ${darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-white text-neutral-900'}`}
          />
          {errors.storageDevices && <p className="text-red-600 mt-2">{errors.storageDevices}</p>}
        </div>

        </div>

        <button
          type="submit"
          className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}
        >
          Submit
        </button>
      </form>
      ) : (
        <div className={`w-full max-w-3xl p-6 rounded-lg shadow-lg mb-4 ${darkMode ? 'bg-neutral-800 text-neutral-100' : 'bg-white text-neutral-900'}`}>
        <h2 className="text-2xl font-semibold mb-4">Analysis Results</h2>
        
        {isAnalyzing ? (
          <p>Analyzing your system information...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className={`flex items-center p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${darkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                <FaMicrochip className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-medium">CPU Usage</h3>
                  <p>{deviceInfo.cpuUsage}%</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${darkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                <FaMemory className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Memory Usage</h3>
                  <p>{deviceInfo.memoryUsage}%</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${darkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                <FaHdd className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Disk Space</h3>
                  <p>{deviceInfo.diskSpace} GB</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${darkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                <FaLaptopCode className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Operating System</h3>
                  <p>{deviceInfo.os}</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${darkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                <FaServer className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Architecture</h3>
                  <p>{deviceInfo.architecture}</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${darkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                <FaShieldAlt className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Antivirus</h3>
                  <p>{deviceInfo.antivirus}</p>
                </div>
              </div>
              
              <div className={`flex items-center p-4 rounded-lg shadow-md transform transition-transform hover:scale-105 ${darkMode ? 'bg-neutral-700' : 'bg-gray-100'}`}>
                <FaDatabase className="text-blue-500 text-2xl mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Storage Devices</h3>
                  <p>{deviceInfo.storageDevices.map((device, index) => (
                    <span key={index}>{device.name}{index < deviceInfo.storageDevices.length - 1 ? ', ' : ''}</span>
                  ))}</p>
                </div>
              </div>
            </div>
  
            <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
            <ul className="list-disc list-inside mb-6">
              {recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
  
            <button onClick={handleRedoAnalysis} className={`w-full py-2 px-4 rounded-lg ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-700 focus:outline-none`}>
              Redo Analysis
            </button>
          </>
        )}
      </div>
      )}
    </div>
  );
}

export default Diagnostics;
