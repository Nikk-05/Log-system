export const buildQuery = (params) => {
    const {
      level,
      message,
      resourceId,
      traceId,
      spanId,
      commit,
      parentResourceId,
      startTime,
      endTime
    } = params;
  
    const query = {
      bool: {
        must: [],
        filter: []
      }
    };
  
    // Full-text search (BONUS 1)
    if (message) {
      query.bool.must.push({
        match: { message }
      });
    }
  
    // Exact filters
    if (level) query.bool.filter.push({ term: { level } });
    if (resourceId) query.bool.filter.push({ term: { resourceId } });
    if (traceId) query.bool.filter.push({ term: { traceId } });
    if (spanId) query.bool.filter.push({ term: { spanId } });
    if (commit) query.bool.filter.push({ term: { commit } });
  
    if (parentResourceId) {
      query.bool.filter.push({
        term: { "metadata.parentResourceId": parentResourceId }
      });
    }
  
    // Date range (BONUS 2)
    if (startTime || endTime) {
      query.bool.filter.push({
        range: {
          timestamp: {
            gte: startTime || "now-7d/d",
            lte: endTime || "now"
          }
        }
      });
    }
  
    return query;
  };