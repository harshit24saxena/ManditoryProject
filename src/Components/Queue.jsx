import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './ComponentCSS/Queue.css';

const QueueStatus = () => {
  const [queueData, setQueueData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Mock data for the queue
  const mockQueueData = {
    currentQueue: [
      { id: 1, name: 'John Doe', position: 1, estimatedTime: 5 },
      { id: 2, name: 'Jane Smith', position: 2, estimatedTime: 10 },
      { id: 3, name: 'Bob Johnson', position: 3, estimatedTime: 15 },
      { id: 4, name: 'Alice Williams', position: 4, estimatedTime: 20 },
      { id: 5, name: 'Charlie Brown', position: 5, estimatedTime: 25 },
    ],
    averageWaitTime: 8,
    queueLength: 5,
    peakHours: '12:00 PM - 1:30 PM',
    lastUpdated: new Date(),
  };

  useEffect(() => {
    // Simulate API call to fetch queue data
    const fetchQueueData = () => {
      try {
        setTimeout(() => {
          setQueueData(mockQueueData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load queue data');
        setLoading(false);
      }
    };

    fetchQueueData();

    // Set up interval for auto-refresh (every 30 seconds)
    const intervalId = setInterval(fetchQueueData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setQueueData({
        ...mockQueueData,
        lastUpdated: new Date(),
      });
      setLoading(false);
    }, 500);
  };

  if (loading && !queueData) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading queue data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="refresh-btn" onClick={handleRefresh}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="queue-status-container">
      <div className="queue-header">
        <h2>Cafeteria Queue Status</h2>
        <div className="header-controls">
          <span className="last-updated">
            Last updated: {queueData.lastUpdated.toLocaleTimeString()}
          </span>
          <button className="refresh-btn" onClick={handleRefresh} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      <div className="queue-content">
        <div className="current-queue">
          <h3>Current Queue</h3>
          {queueData.currentQueue.length > 0 ? (
            <ul className="queue-list">
              {queueData.currentQueue.map((person) => (
                <li key={person.id} className="queue-item">
                  <div className="position-badge">#{person.position}</div>
                  <div className="person-info">
                    <span className="person-name">{person.name}</span>
                    <span className="estimated-time">
                      Est. wait: {person.estimatedTime} min
                    </span>
                  </div>
                  <div className="status-indicator"></div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-queue">No one in the queue currently</p>
          )}
        </div>

        <div className="queue-stats">
          <h3>Queue Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{queueData.queueLength}</div>
              <div className="stat-label">People in queue</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{queueData.averageWaitTime} min</div>
              <div className="stat-label">Average wait time</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{queueData.peakHours}</div>
              <div className="stat-label">Peak hours</div>
            </div>
          </div>
        </div>
      </div>

      <div className="queue-actions">
        <Link to={'/PreOrder'}>
        <button className="action-btn secondary">Pre-order Food</button>
        </Link>
      </div>
    </div>
  );
};

export default QueueStatus;