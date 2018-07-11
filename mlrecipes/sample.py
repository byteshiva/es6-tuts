"""
@author: siva
"""

from sklearn import tree
import numpy as np

features =[[140, 1],
           [130, 1],
           [150, 0],
           [170, 0]
           ];
labels = [0,
          0,
          1,
          1];

X = np.array([150, 0])
clf = tree.DecisionTreeClassifier()
clf = clf.fit(features, labels)
clf.predict([[150, 0]])
