# Lecture 6 After-class Card

Date: 2026-05-13
Source: `Lecture 6 - Machine Learning 3 - IN CLASS.pdf`

## 0. Closed-book Retrieval First

Before rereading slides, answer these from memory:

1. This lecture solves:
2. Core methods / models:
3. Inputs:
4. Processes:
5. Outputs:
6. Evaluation / success check:
7. I am still confused about:

## 1. Corrected Lecture Understanding

### One-sentence Map

这节课把 Machine Learning 3 拆成三条线：先讲 unsupervised learning 里的 clustering，再讲 NLP 从 text preprocessing 到 feature representation，最后讲 deep learning 的基本结构、训练概念和常见模型。

### Module A: Unsupervised Learning / Clustering

- Topic: clustering, especially K-Means.
- Core idea: 在没有 label 的情况下，把相似 data points 分到同一组。
- K-Means:
  - Choose K.
  - Assign each point to the nearest centroid.
  - Update centroid as the mean position of the cluster.
  - Repeat until stable.
- Evaluation / selection:
  - WCSS measures how tightly points are grouped inside clusters.
  - Elbow method tests different K values and chooses a reasonable tradeoff.
- Limitation:
  - K-Means assumes clusters are roughly spherical, similar in size, and similar in density.
  - If clusters have arbitrary shapes, different densities, or outliers, consider DBSCAN, GMM, spectral clustering, or hierarchical clustering.

### Module B: NLP

- Pipeline:
  - Tokenization: split text into words or sentences.
  - Noise removal: remove stopwords, punctuation, and unwanted strings.
  - Tagging: identify noun, verb, and other linguistic roles.
  - Lemmatization: normalize words to dictionary-like base forms.
- Feature building:
  - Bag of Words: represents text by word frequency, but creates high-dimensional sparse vectors and ignores word order/context.
  - N-gram: extends Bag of Words by capturing short word sequences.
  - TF-IDF: weights words by term frequency and inverse document frequency.
  - Word2Vec: static word embeddings.
  - BERT: contextual embeddings that depend on surrounding words.
- Models / examples:
  - LDA uses probabilistic topic modeling with P(word | topic) and P(topic | document).
  - BERT uses bidirectional context, so a word representation depends on both left and right context.
- Packages:
  - NLTK: classic NLP toolkit.
  - spaCy: industrial-strength NLP library.
  - Hugging Face: models, datasets, training utilities, and open-weight model hub.

### Module C: Deep Learning

- Machine learning vs deep learning:
  - Traditional ML often relies more on manual feature engineering.
  - Deep learning can learn more complex functions and automate representation learning.
- Training vocabulary:
  - Batch size: number of samples processed before model update.
  - Epoch: one full pass through the training dataset.
  - Gradient Descent / SGD / Mini-Batch Gradient Descent: optimization strategies.
- Overfitting control:
  - Dropout randomly drops neurons during training to reduce co-dependency and improve generalization.
- ANN:
  - A perceptron is like logistic regression: weighted sum plus activation.
  - ANN stacks many neurons across layers.
- Activation function:
  - Adds non-linearity, allowing neural networks to model complex relationships.
- RNN:
  - Uses recurrent hidden states to capture sequential information.
- CNN:
  - Uses filters/kernels and convolution to extract local features from image-like inputs.
  - Typical flow: convolution, ReLU, max pooling, flatten, dense layer, output layer.
- TensorFlow:
  - `tf.data` for input pipelines.
  - `tf.keras` for model building and training.
  - eager execution for debugging.
  - `tf.function` for graph benefits and deployment.

### Module D: Add-on Concepts

- Perceptron and sigmoid neuron: foundation of neural network units.
- Word embedding:
  - Words represented as vectors.
  - Example relationship: `vector[Queen] = vector[King] - vector[Man] + vector[Woman]`.
- Skip-Gram:
  - Learns word embeddings by predicting context words from a target word.
- Transformer:
  - Teacher recommended extra study via 李宏毅's lectures.

## 2. Active Recall Questions

1. 为什么 K-Means 对 non-spherical clusters 容易失败？
2. WCSS 和 elbow method 分别在帮我们判断什么？
3. Bag of Words、TF-IDF、Word2Vec、BERT 的差别是什么？
4. LDA 和 K-Means 都像是在做 grouping，它们的 input/output 有什么不同？
5. 为什么 deep learning 可以减少 manual feature engineering？
6. Batch size 和 epoch 的区别是什么？
7. Dropout 为什么能减少 overfitting？
8. CNN 为什么适合 image data？
9. RNN 为什么适合 sequential data？
10. Word embedding 比 one-hot 或 Bag of Words 强在哪里？

## 3. English Output Bridge

### 30-second Explanation

Lecture 6 covered three connected areas of machine learning: unsupervised learning, NLP, and deep learning. In unsupervised learning, the focus was clustering, especially K-Means, its objective, the elbow method, and its limitations. In NLP, the lecture introduced text preprocessing and feature representations such as Bag of Words, TF-IDF, Word2Vec, and BERT. In deep learning, it explained basic neural network concepts, including batch size, epochs, gradient descent, dropout, ANN, RNN, CNN, and TensorFlow workflows.

### Interview-safe Sentence

I understand the basic ML pipeline from raw data representation to model selection: for unlabelled tabular data I can use clustering methods like K-Means, for text data I can build NLP features or embeddings, and for complex patterns such as images or sequences I can use deep learning models such as CNNs or RNNs.

## 4. Career Bridge

- Applied AI ability: map the data type to the right representation and model family.
- Data Science ability: explain model assumptions, evaluation signals, and failure cases.
- Data Engineering hook: connect NLP/deep learning workflows to data pipelines, preprocessing, batching, and deployment.
- Portfolio connection:
  - Customer segmentation with clustering.
  - Text topic analysis with LDA or embeddings.
  - Small image/text classifier using TensorFlow or PyTorch.

## 5. Next Tiny Action

Do not reread the full lecture first. Spend 5 minutes answering questions 1-5 from the Active Recall section. Then only revisit the slide group where the answer feels vague.
